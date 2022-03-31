import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderTotalsComponent } from './components/order-totals/order-totals.component';
import { ReactiveFormsModule } from '@angular/forms';
import {PagerComponent, PaginationModule} from 'ngx-bootstrap/pagination';
import { PagingHeaderComponent } from './components/paging-header/paging-header.component';
import { PagingComponent } from './components/paging/paging.component';

@NgModule({
  declarations: [
    OrderTotalsComponent,
    PagingHeaderComponent,
    PagingComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PaginationModule.forRoot()
  ],
  exports: [OrderTotalsComponent, ReactiveFormsModule, PaginationModule, PagingHeaderComponent, PagingComponent]
})
export class SharedModule { }
