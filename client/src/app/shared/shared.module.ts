import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderTotalsComponent } from './components/order-totals/order-totals.component';
import { ReactiveFormsModule } from '@angular/forms';
import {PagerComponent, PaginationModule} from 'ngx-bootstrap/pagination';
import { PagingHeaderComponent } from './components/paging-header/paging-header.component';
import { PagingComponent } from './components/paging/paging.component';
import { TextInputComponent } from './components/text-input/text-input.component';

@NgModule({
  declarations: [
    OrderTotalsComponent,
    PagingHeaderComponent,
    PagingComponent,
    TextInputComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PaginationModule.forRoot()
  ],
  exports: [OrderTotalsComponent, ReactiveFormsModule, PaginationModule, TextInputComponent, PagingHeaderComponent, PagingComponent]
})
export class SharedModule { }
