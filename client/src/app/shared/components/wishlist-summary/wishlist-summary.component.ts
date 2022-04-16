import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { IWishlist, IWishlistItem } from '../../models/wishlist';
import { WishlistService } from '../../../wishlist/wishlist.service';

@Component({
  selector: 'app-wishlist-summary',
  templateUrl: './wishlist-summary.component.html',
  styleUrls: ['./wishlist-summary.component.css']
})
export class WishlistSummaryComponent implements OnInit {

  wishlist$: Observable<IWishlist>;
  @Output() remove: EventEmitter<IWishlistItem> = new EventEmitter<IWishlistItem>();
  @Input() isWishlist = true;
  

  constructor(private wishlistService: WishlistService) { }

  ngOnInit() {
    this.wishlist$ = this.wishlistService.wishlist$;
  }

  removeWishlistItem(item:IWishlistItem){
    this.remove.emit(item);
  }
}
