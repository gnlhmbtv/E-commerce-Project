import { Component, OnInit } from '@angular/core';
import { Blog } from '../shared/models/blog';
import { BlogService } from './blog.service';

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.css']
})
export class BlogPageComponent implements OnInit {

  blogs:Blog[];
  constructor(private blogService:BlogService) { }

  ngOnInit(): void {
    // this.getAllBlogs()
  }

  // getAllBlogs(){
  //   this.blogService.getAllBlogs()
  //     .subscribe(blogs=>{
  //       this.blogs=blogs,
  //       error=>console.log(error);
  //   })
  // }

}
