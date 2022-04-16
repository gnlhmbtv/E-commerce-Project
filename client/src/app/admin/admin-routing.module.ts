import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './shared/admin-layout.component';
import { AdminContactComponent } from './admin-contact/admin-contact.component';

const route: Routes = [
  {path: '', component: AdminLayoutComponent},
  {path:'product',loadChildren:()=>import('../admin/admin-product/admin-product.module').then(m=>m.AdminProductModule)},
  {path:'contact',component:AdminContactComponent},
  {path:'blog',loadChildren:()=>import('../admin/admin-blog/admin-blog.module').then(m=>m.AdminBlogModule)},

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
