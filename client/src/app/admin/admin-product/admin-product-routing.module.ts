import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdminProductComponent } from './admin-product.component';
import { AdminProductDetailsComponent } from './admin-product-details/admin-product-details.component';
import { AdminProductCreateComponent } from './admin-product-create/admin-product-create.component';
import { AdminProductUpdateComponent } from './admin-product-update/admin-product-update.component';


const route:Routes=[
  {path:'',component:AdminProductComponent},
  {path:'create',component:AdminProductCreateComponent},
  {path:'update/:id',component:AdminProductUpdateComponent},
  {path:':id',component:AdminProductDetailsComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(route)
  ],
  exports:[RouterModule]
})
export class AdminProductRoutingModule { }
