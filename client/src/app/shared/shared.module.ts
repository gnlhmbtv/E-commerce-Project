import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderTotalsComponent } from './components/order-totals/order-totals.component';
import { ReactiveFormsModule } from '@angular/forms';
import {PaginationModule} from 'ngx-bootstrap/pagination';
import { PagingHeaderComponent } from './components/paging-header/paging-header.component';

@NgModule({
  declarations: [
    OrderTotalsComponent,
    PagingHeaderComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PaginationModule.forRoot()
  ],
  exports: [OrderTotalsComponent, ReactiveFormsModule, PaginationModule, PagingHeaderComponent]
})
export class SharedModule { }
