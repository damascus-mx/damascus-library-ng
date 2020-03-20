import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { BookService } from 'src/app/core/domain/service/book.service';
import { takeUntil } from 'rxjs/operators';
import { Book } from 'src/app/core/domain/model/book.model';
import { MatSnackBar } from '@angular/material';
import { BookLogUsecase } from 'src/app/core/usecase/booklog.usecase';
import { BookLog } from 'src/app/core/domain/model/booklog.model';
import { BookLogRepositoryImp } from 'src/app/core/infrastructure/persistence/cache/booklog.repository';
import { error } from 'protractor';

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
  // Usecases
  private bookLogUsecase: BookLogUsecase;
  // RxJS
  private subject$ = new Subject<void>();

  constructor(private bookService: BookService, private snackbar: MatSnackBar) {
    // Start isolated DI Container and inject dependencies
    this.bookLogUsecase = new BookLogUsecase(new BookLogRepositoryImp());
    this.booksCached$ = this.bookLogUsecase.getLogs();

    // Get books
    this.books$ = this.bookService.getBooks();
    this.bookService.getBooks().pipe(takeUntil(this.subject$)).subscribe((booksRemote: Array<Book>) => {
      // this.books = booksRemote;
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
      this.bookLogUsecase.removeAll();
      this.booksCached$ = this.bookLogUsecase.getLogs();
    } catch (error) {
      this.snackbar.open('Failed to complete task', 'DISMISS');
    }
  }

}
