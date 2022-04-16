import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { AccountService } from 'src/app/account/account.service';
import { BasketService } from 'src/app/basket/basket.service';
import { IBasket, IBasketItem, IBasketTotals } from 'src/app/shared/models/basket';
import { IUser } from 'src/app/shared/models/user';
import { WishlistService } from 'src/app/wishlist/wishlist.service';
import { IWishlist, Wishlist } from '../../models/wishlist';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css',]
})
export class NavBarComponent implements OnInit {

  basket$: Observable<IBasket>;
  wishlist$: Observable<IWishlist>;
  currentUser$: Observable<IUser>;
  basketTotal$: Observable<IBasketTotals>;
  @Output() remove: EventEmitter<IBasketItem> = new EventEmitter<IBasketItem>();
  @Input() isBasket = true;


  constructor(private basketService: BasketService, private wishlistService: WishlistService, private accountService: AccountService) { }

  ngOnInit() {
    this.basket$ = this.basketService.basket$;
    this.wishlist$ = this.wishlistService.wishlist$;
    this.currentUser$ = this.accountService.currentUser$;
    this.basketTotal$ = this.basketService.basketTotal$;
  }

  logout(){
    this.accountService.logout();
  }

  removeBasketItem(item: IBasketItem){
    this.basketService.removeItemFromBasket(item);
  }
}
