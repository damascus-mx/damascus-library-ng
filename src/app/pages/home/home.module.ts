import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home.component';
import { MatChipsModule, MatIconModule, MatSnackBarModule,
  MatProgressBarModule, MatButtonModule, MatPaginatorModule, MatCardModule } from '@angular/material';
import { BookCardComponent } from 'src/app/shared/components/book-card/book-card.component';
import { BookLogCardComponent } from 'src/app/shared/components/book-log-card/book-log-card.component';
import { BookListComponent } from 'src/app/shared/components/book-list/book-list.component';


@NgModule({
  declarations: [
    HomeComponent,
    BookCardComponent,
    BookLogCardComponent,
    BookListComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatChipsModule,
    MatIconModule,
    MatSnackBarModule,
    MatButtonModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatCardModule
  ],
  providers: [
  ]
})
export class HomeModule { }
