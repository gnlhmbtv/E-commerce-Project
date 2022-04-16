import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BlogService } from 'src/app/blog-page/blog.service';
import { IBlog } from 'src/app/shared/models/blog';
import { BlogParams } from 'src/app/shared/models/blogParams';
import { IPaginationBlog } from 'src/app/shared/models/pagination';

@Component({
  selector: 'app-admin-blog',
  templateUrl: './admin-blog.component.html',
  styleUrls: ['./admin-blog.component.css']
})
export class AdminBlogComponent implements OnInit {

  pageNumber;
  pageSize=6;
  blogs:IBlog[];
  pagination:IPaginationBlog;
  blogParams = new BlogParams();
  totalCount: number;

  constructor(private blogService:BlogService,
              private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.getBlogs()
  }

  // getBlogs(){
  //   this.blogService.getBlogs()
  //     .subscribe(blogs=>{
  //       this.blogs=blogs,
  //         error=>console.log(error);
  //     })
  // }

  getBlogs(){
    this.blogService.getBlogs(this.blogParams)
    .subscribe(response => {
      this.blogs = response.data;
      this.blogParams.pageNumber = response.pageIndex;
      this.blogParams.pageSize = response.pageSize;
      this.totalCount = response.count;
    }, error => {
      console.log(error);

    });
  }

  onDelete(blog:IBlog) {
    this.blogService.deleteBlog(blog.id)
      .subscribe(x=>{
        this.getBlogs();
        this.toastrService.warning(blog.title + ' is deleted');
      },error => console.log(error))
  }

}
