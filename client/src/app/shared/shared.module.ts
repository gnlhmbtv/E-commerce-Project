import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderTotalsComponent } from './components/order-totals/order-totals.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PagerComponent, PaginationModule } from 'ngx-bootstrap/pagination';
import { PagingHeaderComponent } from './components/paging-header/paging-header.component';
import { PagingComponent } from './components/paging/paging.component';
import { TextInputComponent } from './components/text-input/text-input.component';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { StepperComponent } from './components/stepper/stepper.component';
import { BasketSummaryComponent } from './components/basket-summary/basket-summary.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    OrderTotalsComponent,
    PagingHeaderComponent,
    PagingComponent,
    TextInputComponent,
    StepperComponent,
    BasketSummaryComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PaginationModule.forRoot(),
    CdkStepperModule,
    RouterModule
  ],
  exports: [
    OrderTotalsComponent,
    ReactiveFormsModule,
    PaginationModule,
    TextInputComponent,
    PagingHeaderComponent,
    PagingComponent,
    CdkStepperModule,
    StepperComponent,
    BasketSummaryComponent,
  ],
})
export class SharedModule {}
