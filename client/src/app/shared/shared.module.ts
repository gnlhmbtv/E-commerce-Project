import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderTotalsComponent } from './components/order-totals/order-totals.component';
import { ReactiveFormsModule } from '@angular/forms';
import {PaginationModule} from 'ngx-bootstrap/pagination';

@NgModule({
  declarations: [
    OrderTotalsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PaginationModule.forRoot()
  ],
  exports: [OrderTotalsComponent, ReactiveFormsModule, PaginationModule]
})
export class SharedModule { }
