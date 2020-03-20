import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { BookLog } from 'src/app/core/domain/model/booklog.model';
import { BookService } from 'src/app/core/service/book.service';
import { Subject } from 'rxjs';
import { Book } from 'src/app/core/domain/model/book.model';
import { takeUntil } from 'rxjs/operators';
import { BookLogService } from 'src/app/core/service/book-log.service';

@Component({
  selector: 'app-book-log-card',
  templateUrl: './book-log-card.component.html',
  styleUrls: ['./book-log-card.component.scss']
})
export class BookLogCardComponent implements OnInit, OnDestroy {
  @Input() cachedBook: BookLog;
  // RxJS
  subject$ = new Subject<void>();
  // Usecase(s)
  private bookLogUsecase: BookLogService;

  constructor(private bookService: BookService, private bookLogService: BookLogService) {
    // Init isolated DI
    this.bookLogUsecase = bookLogService;
  }

  ngOnInit() {
    this.bookService.getBookByID(this.cachedBook.bookID).pipe(takeUntil(this.subject$))
    .subscribe((bookRemote: Book) => {
      this.cachedBook.bookName = bookRemote.name;
      this.cachedBook.s3Url = bookRemote.s3Url;
    }, (err: Error) => {
      console.log(err);
    }, () => {
      // Completed
      this.bookLogUsecase.saveBook(this.cachedBook);
    });
  }

  ngOnDestroy(): void {
    this.subject$.next();
    this.subject$.complete();
  }

  onPressedCard(url: string) {
    window.open(url);
    this.cachedBook.createdAt = new Date();
    this.bookLogUsecase.saveBook(this.cachedBook);
  }

}
