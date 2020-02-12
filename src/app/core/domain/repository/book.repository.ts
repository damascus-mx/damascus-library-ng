import { Book } from '../model/book.model';

export interface BookRepository {
    GetAll(): Array<Book>;
    GetByID(id: string): Book;
    Save(model: Book): Error;
}
