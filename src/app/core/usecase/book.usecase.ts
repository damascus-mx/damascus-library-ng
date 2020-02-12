import { BookRepository } from '../domain/repository/book.repository';
import { Book } from '../domain/model/book.model';

export class BookUsecase {
    constructor(private repository: BookRepository) {
    }

    getBooks(): Promise<Array<Book>> {
        return new Promise((resolve, reject) => {
            try {
                const books = this.repository.GetAll();
                resolve(books);
            } catch (error) {
                reject(error);
            }
        });
    }
}
