import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { Book } from 'src/app/core/domain/model/book.model';
import Swiper from 'swiper';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit, AfterViewInit {
  // Domain data
  @Input() books: Array<Book>;

  // UI
  bookSwiper: Swiper;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    // Init swiper
    this.bookSwiper = new Swiper('.swiper-container', {
      // cssMode: true,
      freeMode: true,
      freeModeFluid : true,
      slidesPerView: 'auto',
      // mousewheel: true,
      lazy: {
        loadPrevNext: true,
        loadPrevNextAmount: 3,
        elementClass: 'swiper-lazy',
        loadedClass: 'swiper-lazy-loaded',
        preloaderClass: 'swiper-lazy-preloader',
      }
    });
  }

}
