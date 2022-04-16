import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { IBlog } from '../shared/models/blog';
import { BlogParams } from '../shared/models/blogParams';
import { BlogService } from './blog.service';

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.css']
})
export class BlogPageComponent implements OnInit {

  @ViewChild('search', {static: false}) searchTerm: ElementRef;
  blogs: IBlog[];
  blogParams = new BlogParams();
  totalCount: number;

  constructor(private blogService:BlogService) { }

  ngOnInit(): void {

  }

  // getAllBlogs(){
  //   this.blogService.getAllBlogs()
  //     .subscribe(blogs=>{
  //       this.blogs=blogs,
  //       error=>console.log(error);
  //   })
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

}
