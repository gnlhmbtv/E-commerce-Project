import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WishlistComponent } from './wishlist.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: WishlistComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class WishlistRoutingModule { }
