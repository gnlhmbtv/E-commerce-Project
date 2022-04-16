import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { AccountService } from '../account/account.service';
import { BasketService } from '../basket/basket.service';
import { IBrand } from '../shared/models/brand';
import { IProduct } from '../shared/models/product';
import { IColor } from '../shared/models/productColor';
import { ISize } from '../shared/models/productSize';
import { IType } from '../shared/models/productType';
import { ShopParams } from '../shared/models/shopParams';
import { IUser } from '../shared/models/user';
import { ShopService } from '../shop/shop.service';
import { WishlistService } from '../wishlist/wishlist.service';
import * as $ from "jquery";
import 'slick-carousel';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @ViewChild('search', {static: false}) searchTerm: ElementRef;
  brands: IBrand[];
  types: IType[];
  colors: IColor[];
  sizes: ISize[];
  shopParams = new ShopParams();
  totalCount: number;
  @Input() product: IProduct;
  products: IProduct[];
  currentUser$: Observable<IUser>;
  quantity = 1;
  sortOptions = [
    {name: 'Alphabetical', value: 'name'},
    {name: 'Price: Low to High', value: 'priceAsc'},
    {name: 'Price: High to Low', value: 'priceDesc'}
  ];
  
  constructor(private shopService: ShopService, private activateRoute: ActivatedRoute,
    private basketService: BasketService, private accountService: AccountService,
    private wishlistService: WishlistService,) { }

  ngOnInit(): void {
    $(document).ready(function(){
    
  $('.home_slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    dots: false,
    arrows: true,
    prevArrow: $('.prev'),
    nextArrow: $('.next'),
    autoplay: true,
    autoplaySpeed: 6000,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
        },
    ]
})
      
    })
    this.getProducts();
    // this.loadProduct();
    this.getBrands();
    this.getTypes();
    this.getColors();
    this.getSizes();
    this.currentUser$ = this.accountService.currentUser$;
  }

  

  addItemToBasket(){
    this.basketService.addItemToBasket(this.product);
  }

  addItemToWishlist(){
    this.wishlistService.addItemToWishlist(this.product);
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


  getBrands(){
    this.shopService.getBrands().subscribe(response => {
      this.brands = [{id: 0, name: 'All'}, ...response];
    }, error => {
      console.log(error);

    });
  }

  getTypes(){
    this.shopService.getTypes().subscribe(response => {
      this.types = [{id: 0, name: 'All'}, ...response];
    }, error => {
      console.log(error);

    });
  }

  getSizes(){
    this.shopService.getSizes().subscribe(response => {
      this.sizes = [{id: 0, name: 'All'}, ...response];
    }, error => {
      console.log(error);
    });
  }

  getColors(){
    this.shopService.getColors().subscribe(response => {
      this.colors = [{id: 0, name: 'All'}, ...response];
    }, error => {
      console.log(error);
    });
  }


}
