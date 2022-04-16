import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IWishlist, IWishlistItem } from '../shared/models/wishlist';
import { WishlistService } from './wishlist.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  wishlist$: Observable<IWishlist>;

  constructor(private wishlistService: WishlistService) { }

  ngOnInit(): void {
    this.wishlist$= this.wishlistService.wishlist$;
  }

  removeBasketItem(item: IWishlistItem){
    this.wishlistService.removeItemFromWishlist(item);
  }

}
