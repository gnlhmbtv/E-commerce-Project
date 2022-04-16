import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdminBlogComponent } from './admin-blog.component';
import { AdminBlogCreateComponent } from './admin-blog-create/admin-blog-create.component';
import { AdminBlogUpdateComponent } from './admin-blog-update/admin-blog-update.component';
import { AdminBlogDetailsComponent } from './admin-blog-details/admin-blog-details.component';



const routes:Routes=[
  {path:'',component:AdminBlogComponent},
  {path:'create',component:AdminBlogCreateComponent},
  {path:'update/:id',component:AdminBlogUpdateComponent},
  {path:':id',component:AdminBlogDetailsComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class AdminBlogRoutingModule { }
