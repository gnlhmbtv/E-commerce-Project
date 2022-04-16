import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WishlistComponent } from './wishlist.component';
import { WishlistRoutingModule } from './wishlist-routing.module';
import { SharedModule } from '../../shared.module';



@NgModule({
  declarations: [WishlistComponent],
  imports: [
    CommonModule,
    WishlistRoutingModule,
    SharedModule
  ]
})
export class WishlistModule { }
