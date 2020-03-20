import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { BookService } from 'src/app/core/service/book.service';
import { takeUntil } from 'rxjs/operators';
import { Book } from 'src/app/core/domain/model/book.model';
import { MatSnackBar } from '@angular/material';
import { BookLog } from 'src/app/core/domain/model/booklog.model';
import { BookLogService } from 'src/app/core/service/book-log.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  // Domain models
  books$: Observable<Array<Book>>;
  booksCached$: Observable<Array<BookLog>>;
  // UI
  isLoading = true;
  gotError = false;
  // Services
  private bookLogService: BookLogService;
  // RxJS
  private subject$ = new Subject<void>();

  constructor(private bookService: BookService, private snackbar: MatSnackBar, private _bookLogService: BookLogService) {
    this.bookLogService = _bookLogService;
    this.booksCached$ = this.bookLogService.getLogs();

    // Get books
    this.books$ = this.bookService.getBooks();
    this.bookService.getBooks().pipe(takeUntil(this.subject$)).subscribe((booksRemote: Array<Book>) => {
      // this.books = booksRemote;
      console.log(booksRemote);
    }, (err: Error) => {
      this.isLoading = false;
      this.gotError = true;
    }, () => {
      // Completed
      this.gotError = false;
      this.isLoading = false;
    });
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.subject$.next();
    this.subject$.complete();
  }

  onDeleteLogs(): void {
    try {
      this.bookLogService.removeAll();
      this.booksCached$ = this.bookLogService.getLogs();
    } catch (error) {
      this.snackbar.open('Failed to complete task', 'DISMISS');
    }
  }

}
