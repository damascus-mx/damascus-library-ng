import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { REMOTE_CONFIG } from '../../common/remote.config';
import { Book } from '../model/book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }

  getBooks(): Observable<Array<Book>> {
    return this.http.get(`${REMOTE_CONFIG.API_URL}/book`).pipe(map((booksRemote: Array<any>) => {
      const books = new Array<Book>();
      booksRemote.forEach(bookRemote => {
        const book = new Book();
        book.ID = bookRemote.book_id;
        book.name = bookRemote.name;
        book.s3Url = bookRemote.s3_url;
        book.authors = bookRemote.authors;
        book.categories = bookRemote.categories;
        book.publishedAt = bookRemote.published_at;
        book.createdAt = bookRemote.created_at;

        books.push(book);
      });

      return books;
    }));
  }
}
