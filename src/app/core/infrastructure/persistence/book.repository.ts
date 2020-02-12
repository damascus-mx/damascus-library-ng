import { BookRepository } from 'src/app/core/domain/repository/book.repository';
import { Book } from 'src/app/core/domain/model/book.model';

export class BookRepositoryImp implements BookRepository {
    constructor() {
    }

    GetAll(): Array<Book> {
        return null;
    }

    GetByID(id: string): Book {
        throw new Error("Method not implemented.");
    }

    Save(model: Book): Error {
        throw new Error("Method not implemented.");
    }


}
