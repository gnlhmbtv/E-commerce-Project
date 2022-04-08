import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminProductComponent } from './admin-product.component';
import { AdminProductRoutingModule } from './admin-product-routing.module';
import { AdminProductCreateComponent } from './admin-product-create/admin-product-create.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminProductDetailsComponent } from './admin-product-details/admin-product-details.component';
import { AdminProductUpdateComponent } from './admin-product-update/admin-product-update.component';
import { AdminProductItemComponent } from './admin-product-item/admin-product-item.component';



@NgModule({
  declarations: [
    AdminProductComponent,
    AdminProductCreateComponent,
    AdminProductDetailsComponent,
    AdminProductUpdateComponent,
    AdminProductItemComponent
  ],
  imports: [
    CommonModule,
    AdminProductRoutingModule,
    ReactiveFormsModule 
  ]
})
export class AdminProductModule { }
