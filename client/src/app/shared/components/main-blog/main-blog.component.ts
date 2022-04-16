import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/blog-page/blog.service';
import { Blog } from '../../models/blog';
import { ShopParams } from '../../models/shopParams';

@Component({
  selector: 'app-main-blog',
  templateUrl: './main-blog.component.html',
  styleUrls: ['./main-blog.component.css']
})
export class MainBlogComponent implements OnInit {
  shopParams = new ShopParams();
  totalCount: number;
  blogs:Blog[];
  constructor(private blogService:BlogService) { }

  ngOnInit(): void {
    this.getAllBlogs()
  }

  getAllBlogs(){
    this.blogService.getAllBlogs()
      .subscribe(blogs=>{
        this.blogs=blogs,
        error=>console.log(error);
    })
  };

  onPageChanged(event: any) {
    if(this.shopParams.pageNumber !== event){
      this.shopParams.pageNumber = event;
      this.getAllBlogs();
    }
  }


}
