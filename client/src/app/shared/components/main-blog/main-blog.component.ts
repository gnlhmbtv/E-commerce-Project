import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { BlogService } from 'src/app/blog-page/blog.service';
import { IBlog } from '../../models/blog';
import { BlogParams } from '../../models/blogParams';
import { ShopParams } from '../../models/shopParams';

@Component({
  selector: 'app-main-blog',
  templateUrl: './main-blog.component.html',
  styleUrls: ['./main-blog.component.css']
})
export class MainBlogComponent implements OnInit {
  @ViewChild('search', {static: false}) searchTerm: ElementRef;
  blogs: IBlog[];
  blogParams = new BlogParams();
  totalCount: number;
  constructor(private blogService:BlogService) { }

  ngOnInit(): void {
    this.getBlogs()
  }



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

  onSearch(){
    this.blogParams.search = this.searchTerm.nativeElement.value;
    this.blogParams.pageNumber = 1;
    this.getBlogs();
  }

  onReset(){
    this.searchTerm.nativeElement.value = '';
    this.blogParams = new BlogParams();
    this.getBlogs();
  }

  onPageChanged(event: any) {
    if(this.blogParams.pageNumber !== event){
      this.blogParams.pageNumber = event;
      this.getBlogs();
    }
  }

  // onPageChanged(event: any) {
  //   if(this.shopParams.pageNumber !== event){
  //     this.shopParams.pageNumber = event;
  //     this.getAllBlogs();
  //   }
  // }


}
