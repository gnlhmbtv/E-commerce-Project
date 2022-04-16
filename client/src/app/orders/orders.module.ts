import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { OrdersComponent } from './orders.component';
import { OrderDetailedComponent } from './order-detailed/order-detailed.component';
import { OrdersRoutingModule } from './orders-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NgxSpinnerModule } from 'ngx-spinner';



@NgModule({
  declarations: [OrdersComponent, OrderDetailedComponent],
  imports: [
    CommonModule,
    SharedModule,
    // BrowserModule,
    // ModalModule.forRoot(),
    // BrowserAnimationsModule,
    // HttpClientModule,
    // NgxSpinnerModule
  ],
  exports: [OrderDetailedComponent]
})
export class OrdersModule { }
