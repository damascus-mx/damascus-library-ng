import { Component, OnInit, Input } from '@angular/core';
import { Book } from 'src/app/core/domain/model/book.model';
import { NewBookLog, BookLog } from 'src/app/core/domain/model/booklog.model';
import { MatSnackBar } from '@angular/material';
import { BookLogService } from 'src/app/core/service/book-log.service';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss']
})
export class BookCardComponent implements OnInit {
  @Input() book: Book;

  private bookLogUsecase: BookLogService;

  constructor(private snackbar: MatSnackBar, private bookLogService: BookLogService) {
    this.bookLogUsecase = bookLogService;
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
