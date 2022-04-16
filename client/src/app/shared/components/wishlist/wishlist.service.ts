import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IProduct } from '../../models/product';
import { IWishlist, IWishlistItem, Wishlist } from '../../models/wishlist';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  baseUrl = environment.apiUrl;
  private wishlistSource = new BehaviorSubject<IWishlist>(null);
  wishlist$ = this.wishlistSource.asObservable();
  shipping = 0;
  
  constructor(private http: HttpClient) { }

  getWishlist(id: string){
    return this.http.get(this.baseUrl + 'wishlist?id=' + id)
      .pipe(
        map((wishlist: IWishlist) => {
          this.wishlistSource.next(wishlist);
        })
      );
  }

  getCurrentWishlistValue(){
    return this.wishlistSource.value;
  }

  addItemToWishlist(item: IProduct, quantity = 1){
    const itemToAdd: IWishlistItem = this.mapProductItemToWishlistItem(item, quantity);
    let wishlist = this.getCurrentWishlistValue();
    if(wishlist==null){
      wishlist = this.createWishlist();
    }
    wishlist.items = this.addOrUpdateItem(wishlist.items, itemToAdd, quantity);
    this.setWishlist(wishlist);
  }

  setWishlist(basket: IWishlist){
    return this.http.post(this.baseUrl + 'wishlist', Wishlist).subscribe((response: IWishlist) => {
      this.wishlistSource.next(response);
      
    }, error => {
      console.log(error);
    });
  }

  deleteLocalWishlist(id: string) {
    this.wishlistSource.next(null);
    localStorage.removeItem('wishlist_id');
  }

  removeItemFromWishlist(item: IWishlistItem) {
    const wishlist = this.getCurrentWishlistValue();
    if (wishlist.items.some(x => x.id === item.id)) {
      wishlist.items = wishlist.items.filter(i => i.id !== item.id);
      if (wishlist.items.length > 0) {
        this.setWishlist(wishlist);
      }else{
        this.deleteWishlist(wishlist);
      }
    }
  }
  

  private createWishlist(): IWishlist {
    const wishlist = new Wishlist();
    localStorage.setItem('wishlist_id', wishlist.id);
    return wishlist;
  }

  deleteWishlist(wishlist: IWishlist) {
    return this.http.delete(this.baseUrl + 'wishlist?id=' + wishlist.id).subscribe(() => {
      this.wishlistSource.next(null);
      localStorage.removeItem('wishlist_id');
    }, error => {
      console.log(error);
    })
  }

  private addOrUpdateItem(items: IWishlistItem[], itemToAdd: IWishlistItem, quantity: number): IWishlistItem[] {
    const index = items.findIndex(i => i.id === itemToAdd.id);
    if(index === -1){
      itemToAdd.quantity = quantity;
      items.push(itemToAdd);
    } else{
      items[index].quantity += quantity;
    }

    return items;
  }


  private mapProductItemToWishlistItem(item: IProduct, quantity: number): IWishlistItem {
    return{
      id: item.id,
      productName: item.name,
      price: item.price, 
      photoUrl:item.photoUrl,
      quantity,
      brand: item.productBrand,
      type: item.productType,
      size: item.productSize,
      color: item.productColor,
    };
  }

}
