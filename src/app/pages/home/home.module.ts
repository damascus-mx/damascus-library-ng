import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home.component';
import { MatChipsModule, MatIconModule, MatSnackBarModule } from '@angular/material';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatChipsModule,
    MatIconModule,
    MatSnackBarModule
  ],
  providers: []
})
export class HomeModule { }
