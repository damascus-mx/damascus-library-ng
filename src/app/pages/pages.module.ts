import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './components/pages.component';
import { MaterialModule } from '../common/module/material/material.module';
import { MatMenuModule } from '@angular/material';


@NgModule({
  declarations: [PagesComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    MaterialModule,
    MatMenuModule
  ]
})
export class PagesModule { }
