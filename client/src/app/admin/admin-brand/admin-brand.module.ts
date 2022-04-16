import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminBrandCreateComponent } from './admin-brand-create/admin-brand-create.component';
import { AdminBrandComponent } from './admin-brand.component';
import { AdminBrandRoutingModule } from './admin-brand-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { SharedModule } from 'src/app/shared/shared.module';
import { AdminBrandItemComponent } from './admin-brand-item/admin-brand-item.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    // AdminBrandComponent,
    // AdminBrandCreateComponent,
    // AdminBrandItemComponent
  ],
  imports: [
    CommonModule,
    AdminBrandRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
    SharedModule
  ]
})
export class AdminBrandModule { }
