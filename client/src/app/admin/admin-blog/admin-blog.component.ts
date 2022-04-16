import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BlogService } from 'src/app/blog-page/blog.service';
import { Blog } from 'src/app/shared/models/blog';

@Component({
  selector: 'app-admin-blog',
  templateUrl: './admin-blog.component.html',
  styleUrls: ['./admin-blog.component.css']
})
export class AdminBlogComponent implements OnInit {

  blogs:Blog[];

  constructor(private blogService:BlogService,
              private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.getAllBlogs()
  }

  getAllBlogs(){
    this.blogService.getAllBlogs()
      .subscribe(blogs=>{
        this.blogs=blogs,
          error=>console.log(error);
      })
  }

  onDelete(blog:Blog) {
    this.blogService.deleteBlog(blog.id)
      .subscribe(x=>{
        this.getAllBlogs();
        this.toastrService.warning(blog.title + ' is deleted');
      },error => console.log(error))
  }

}
