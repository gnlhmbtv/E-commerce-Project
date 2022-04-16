import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AccountService } from 'src/app/account/account.service';
import { BlogService } from 'src/app/blog-page/blog.service';
import { IBlog } from 'src/app/shared/models/blog';
import { BlogParams } from 'src/app/shared/models/blogParams';
import { IProduct } from 'src/app/shared/models/product';
import { ShopParams } from 'src/app/shared/models/shopParams';
import { IUser } from 'src/app/shared/models/user';
import { ShopService } from 'src/app/shop/shop.service';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css']
})
export class AdminLayoutComponent implements OnInit {

  shopParams = new ShopParams();
  users: IUser[];
  products: IProduct[];
  totalCount: number;
  @ViewChild('search', {static: false}) searchTerm: ElementRef;
  blogs: IBlog[];
  blogParams = new BlogParams();
  totalCountBlog: number;

  constructor(private accountService: AccountService, private shopService: ShopService,
    private blogService: BlogService) { }

  ngOnInit(): void {
    this.getUsers();
    this.getProducts();
    this.getBlogs();
  }

  

  getUsers(){
    this.accountService.getUsers().subscribe(response => {
      this.users = response;
    }, error => {
      console.log(error);
    });
  }

  getBlogs(){
    this.blogService.getBlogs(this.blogParams)
    .subscribe(response => {
      this.blogs = response.data;
      this.blogParams.pageNumber = response.pageIndex;
      this.blogParams.pageSize = response.pageSize;
      this.totalCountBlog = response.count;
    }, error => {
      console.log(error);

    });
  }


  getProducts(){
    this.shopService.getProducts(this.shopParams)
    .subscribe(response => {
      this.products = response.data;
      this.shopParams.pageNumber = response.pageIndex;
      this.shopParams.pageSize = response.pageSize;
      this.totalCount = response.count;
    }, error => {
      console.log(error);

    });
  }

}
