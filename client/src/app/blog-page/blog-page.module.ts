import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogPageComponent } from './blog-page.component';
import { BlogDetailPageComponent } from './blog-detail-page/blog-detail-page.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [BlogPageComponent, BlogDetailPageComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [BlogDetailPageComponent]
})
export class BlogPageModule { }
