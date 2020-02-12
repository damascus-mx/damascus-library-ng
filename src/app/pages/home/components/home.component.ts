import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { BookService } from 'src/app/core/domain/service/book.service';
import { takeUntil } from 'rxjs/operators';
import { Book } from 'src/app/core/domain/model/book.model';
import { MatSnackBar, PageEvent } from '@angular/material';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  // Domain models
  books: Array<Book>;
  // UI
  isLoading = true;
  gotError = false;
  // MatPaginator Inputs
  length = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  // MatPaginator Output
  pageEvent: PageEvent;
  // RxJS
  private subject$ = new Subject<void>();

  constructor(private bookService: BookService, private snackbar: MatSnackBar) {
    this.bookService.getBooks().pipe(takeUntil(this.subject$)).subscribe((booksRemote: Array<Book>) => {
      this.books = booksRemote;
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

  openBookTab(url: string) {
    if (url) {
      window.open(url);
      return;
    }

    this.snackbar.open('This book doesn\'t has any URL resource attached', 'DISMISS', {
      duration: 5000
    });
  }

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    }
  }

}
