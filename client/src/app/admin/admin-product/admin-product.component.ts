import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { IPagination } from 'src/app/shared/models/pagination';
import { IProduct } from 'src/app/shared/models/product';
import { ShopParams } from 'src/app/shared/models/shopParams';
import { ShopService } from 'src/app/shop/shop.service';

@Component({
  selector: 'app-admin-product',
  templateUrl: './admin-product.component.html',
  styleUrls: ['./admin-product.component.css']
})
export class AdminProductComponent implements OnInit {

  pageNumber;
  pageSize=10;
  products:IProduct[];
  pagination:IPagination;
  shopParams = new ShopParams();
  totalCount: number;

  constructor(private shopService:ShopService,private toastr:ToastrService) { }

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts(){
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

  onDelete(product:IProduct) {
    this.shopService.deleteProduct(product.id)
      .subscribe(x=>{
        this.getAllProducts();
        this.toastr.warning(product.name + ' is deleted');
      },error => console.log(error))
  }

}
