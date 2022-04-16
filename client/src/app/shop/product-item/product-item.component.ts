import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AccountService } from 'src/app/account/account.service';
import { BasketService } from 'src/app/basket/basket.service';
import { WishlistService } from 'src/app/wishlist/wishlist.service';
import { IProduct } from 'src/app/shared/models/product';
import { IUser } from 'src/app/shared/models/user';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() product: IProduct;
  currentUser$: Observable<IUser>;

  constructor(private basketService: BasketService, private wishlistService: WishlistService, private accountService: AccountService) { }

  ngOnInit() {
    this.currentUser$ = this.accountService.currentUser$;

  }

  addItemToBasket(){
    this.basketService.addItemToBasket(this.product);
  }

  addItemToWishlist(){
    this.wishlistService.addItemToWishlist(this.product);
  }

}