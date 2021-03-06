import { getCustomRepository, getRepository } from 'typeorm';
import Category from '../models/Category';

import AppError from '../errors/AppError';
import Transaction from '../models/Transaction';
import TransactionRepository from '../repositories/TransactionsRepository';

interface Request {
  title: string;
  value: number;
  type: 'income' | 'outcome';
  category: string;
}

class CreateTransactionService {
  public async execute({ title, value, type, category }: Request): Promise<Transaction> {
    const transactionRepository = getCustomRepository(TransactionRepository);
    const categoryRepository = getRepository(Category);

    const { total } = await transactionRepository.getBalance();

    if (type === 'outcome' && total < value) {
      throw new AppError('You do not have enough money');
    }

    const categoryExists = await categoryRepository.findOne({
      where: {
        title: category
      }
    });

    let category_id;

    if (categoryExists) {
      category_id = categoryExists.id;
    } else {
      const newCategory = categoryRepository.create({
        title: category
      });

      const savedCategory = await categoryRepository.save(newCategory);

      category_id = savedCategory.id;
    }

    const transaction = transactionRepository.create({
      title,
      value,
      type,
      category_id
    });

    await transactionRepository.save(transaction);

    return transaction;
  }
}

export default CreateTransactionService;
