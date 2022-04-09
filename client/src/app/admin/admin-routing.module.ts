import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './shared/admin-layout.component';

const route: Routes = [
  {path: '', component: AdminLayoutComponent},
  {path:'product',loadChildren:()=>import('../admin/admin-product/admin-product.module').then(m=>m.AdminProductModule)},

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(route)
  ],
  exports:[RouterModule]
})
export class AdminRoutingModule { }
