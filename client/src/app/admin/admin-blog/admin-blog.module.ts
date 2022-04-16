import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminBlogComponent } from './admin-blog.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminBlogCreateComponent } from './admin-blog-create/admin-blog-create.component';
import { AdminBlogUpdateComponent } from './admin-blog-update/admin-blog-update.component';
import { AdminBlogDetailsComponent } from './admin-blog-details/admin-blog-details.component';
import { AdminBlogItemComponent } from './admin-blog-item/admin-blog-item.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AdminBlogComponent,
    AdminBlogCreateComponent,
     AdminBlogUpdateComponent,
    AdminBlogDetailsComponent,
     AdminBlogItemComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
    RouterModule,
    SharedModule
  ]
})
export class AdminBlogModule { }
