import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLayoutComponent } from './shared/admin-layout.component';
import { LeftSidebarComponent } from './shared/left-sidebar/left-sidebar.component';
import { AdminNavbarComponent } from './shared/admin-navbar/admin-navbar.component';
import { UserManagmentComponent } from './user-managment/user-managment.component';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminContactComponent } from './admin-contact/admin-contact.component';
import { AdminContactItemComponent } from './admin-contact/admin-contact-item/admin-contact-item.component';
import { AdminBlogCreateComponent } from './admin-blog/admin-blog-create/admin-blog-create.component';
import { AdminBlogDetailsComponent } from './admin-blog/admin-blog-details/admin-blog-details.component';
import { AdminBlogItemComponent } from './admin-blog/admin-blog-item/admin-blog-item.component';
import { AdminBlogUpdateComponent } from './admin-blog/admin-blog-update/admin-blog-update.component';
import { AdminBrandComponent } from './admin-brand/admin-brand.component';
import { AdminBrandItemComponent } from './admin-brand/admin-brand-item/admin-brand-item.component';
import { AdminBrandCreateComponent } from './admin-brand/admin-brand-create/admin-brand-create.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AdminLayoutComponent,
    LeftSidebarComponent,
    AdminNavbarComponent,
    UserManagmentComponent,
    AdminContactComponent,
    AdminContactItemComponent,
    AdminBrandComponent,
    AdminBrandItemComponent,
    AdminBrandCreateComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
