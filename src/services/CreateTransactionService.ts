import { getCustomRepository } from 'typeorm';

// import AppError from '../errors/AppError';
import Transaction from '../models/Transaction';
import TransactionRepository from '../repositories/TransactionsRepository';
import CategoryRepository from '../repositories/CategoriesRepository';

interface Request {
  title: string;
  value: number;
  type: 'income' | 'outcome';
  category: string;
}

class CreateTransactionService {
  public async execute({ title, value, type, category }: Request): Promise<Transaction> {
    // TODO
    const transactionRepository = getCustomRepository(TransactionRepository);
    const categoryRepository = getCustomRepository(CategoryRepository);

    const categoryExists = await categoryRepository.findOne({
      where: {
        category
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
