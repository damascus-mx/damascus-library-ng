import { BookLogRepository } from 'src/app/core/domain/repository/booklog.repository';
import { BookLog, NewBookLog } from 'src/app/core/domain/model/booklog.model';
import { CACHE_CONFIG } from 'src/app/core/common/cache.config';
import { Injectable } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class BookLogRepositoryImp implements BookLogRepository {
    getBookLog(id: string): BookLog {
        try {
            const books: Array<BookLog> = JSON.parse(localStorage.getItem(CACHE_CONFIG.STORAGE_KEY));
            let book: BookLog = null;

            books.forEach(bookStorage => {
                book = bookStorage.bookID === id ? bookStorage : book;
            });

            return book;
        } catch (error) {
            return error;
        }
    }

    getBookLogs(): Observable<BookLog[]> {
        try {
            return new Observable((subsciber) => {
                subsciber.next(JSON.parse(localStorage.getItem(CACHE_CONFIG.STORAGE_KEY)));
                subsciber.complete();
            });
        } catch (error) {
            return error;
        }
    }

    save(model: BookLog): Error {
        try {
            let books: Array<BookLog> = JSON.parse(localStorage.getItem(CACHE_CONFIG.STORAGE_KEY));
            if (books && books.length > 1) {
                books.forEach(book => {
                    if (book.bookID === model.bookID) {
                        this.removeBook(book.bookID);
                    }
                });

                books.push(model);
            } else {
                books = [];
                books.push(model);
                localStorage.setItem(CACHE_CONFIG.STORAGE_KEY, JSON.stringify(books));
            }

            return null;
        } catch (error) {
            console.log(error);
            return error;
        }
    }

    removeBook(id: string): Error {
        try {
            let books: Array<BookLog> = JSON.parse(localStorage.getItem(CACHE_CONFIG.STORAGE_KEY));
            let bookIndex: number;

            books.forEach((book: BookLog, i: number) => {
                bookIndex = book.bookID === id ? i : bookIndex;
                if (bookIndex !== undefined) {
                    books = books.slice(0, bookIndex).concat(books.slice(0 + 1, books.length));
                    return;
                }

            });

            if (bookIndex !== undefined) {
                localStorage.setItem(CACHE_CONFIG.STORAGE_KEY, JSON.stringify(books));
            }

            return null;
        } catch (error) {
            return error;
        }
    }

    removeAll(): Error {
        try {
            localStorage.removeItem(CACHE_CONFIG.STORAGE_KEY);
            return null;
        } catch (error) {
            return error;
        }
    }


}
