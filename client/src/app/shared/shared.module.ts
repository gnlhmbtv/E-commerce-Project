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
import { MainBlogComponent } from './components/main-blog/main-blog.component';
import { WishlistComponent } from '../wishlist/wishlist.component';
import { WishlistSummaryComponent } from './components/wishlist-summary/wishlist-summary.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ServiceComponent } from './components/service/service.component';

@NgModule({
  declarations: [
    OrderTotalsComponent,
    PagingHeaderComponent,
    PagingComponent,
    TextInputComponent,
    StepperComponent,
    BasketSummaryComponent,
    MainBlogComponent,
    WishlistSummaryComponent,
    NavBarComponent,
    FooterComponent,
    ServiceComponent
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
    MainBlogComponent,
    WishlistSummaryComponent,
    NavBarComponent,
    FooterComponent
  ],
})
export class SharedModule {}
