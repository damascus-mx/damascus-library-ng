import { Component, OnInit, Input } from '@angular/core';
import { Book } from 'src/app/core/domain/model/book.model';
import { NewBookLog, BookLog } from 'src/app/core/domain/model/booklog.model';
import { BookLogUsecase } from 'src/app/core/usecase/booklog.usecase';
import { BookLogRepositoryImp } from 'src/app/core/infrastructure/persistence/cache/booklog.repository';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss']
})
export class BookCardComponent implements OnInit {
  @Input() book: Book;

  private bookLogUsecase: BookLogUsecase;

  constructor(private snackbar: MatSnackBar) {
    // Manual DI, inject dependencies
    this.bookLogUsecase = new BookLogUsecase(new BookLogRepositoryImp());
  }

  ngOnInit() {
  }

  openBookTab(url, bookId, bookName: string) {
    if (url) {
      window.open(url);
      const bookLog: BookLog = NewBookLog(bookId, bookName);
      this.bookLogUsecase.saveBook(bookLog);

      return;
    }

    this.snackbar.open('This book doesn\'t has any file.', 'DISMISS', {
      duration: 5000
    });
  }

}
