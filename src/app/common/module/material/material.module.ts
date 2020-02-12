import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as material from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    material.MatButtonModule,
    material.MatToolbarModule,
    material.MatFormFieldModule,
    material.MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    material.MatCardModule,
    material.MatSlideToggleModule,
    material.MatProgressBarModule,
    material.MatIconModule
  ]
})
export class MaterialModule { }
