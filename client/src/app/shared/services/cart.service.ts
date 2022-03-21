import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
// RxJS
import { Subject, BehaviorSubject } from 'rxjs';
// NGRX
import { Store, select } from '@ngrx/store';

import { Product } from 'src/app/shared/classes/product';
import { CartItem } from 'src/app/shared/classes/cart-item';
import { cartItemsSelector } from 'src/app/core/selectors/selectors';
import { AddToCartAction, RemoveFromCartAction, UpdateCartAction } from 'src/app/core/actions/actions';

@Injectable({
	providedIn: 'root'
})

export class CartService {

	public cartItems: CartItem[] = [];
	public cartStream: Subject<any> = new BehaviorSubject([]);
	public qtyTotal: Subject<number> = new BehaviorSubject(0);
	public priceTotal: Subject<number> = new BehaviorSubject(0);

	constructor(private store: Store<any>, private toastrService: ToastrService) {
		store.pipe(select(cartItemsSelector)).subscribe(items => {
			this.cartItems = items;

			this.cartStream.next(items);

			this.qtyTotal.next(
				this.cartItems.reduce((acc, cur) => {
					return acc + cur.qty
				}, 0));

			this.priceTotal.next(
				this.cartItems.reduce((acc, cur) => {
					return acc + cur.sum
				}, 0)
			)
		})
	}

	// Product Add to Cart
	addToCart(product: Product, qty = 1) {
		if (this.canAddToCart(product, qty)) {
			this.store.dispatch(new AddToCartAction({ product, qty }));
			this.toastrService.success('Product added to Cart.');
		} else {
			this.toastrService.error('Sorry, you can\'t add that amount to the cart.');
		}
	}

	// Product Removed from the Cart
	removeFromCart(product: CartItem) {
		this.store.dispatch(new RemoveFromCartAction({ product }));
		this.toastrService.success('Product removed from Cart.');
	}

	// Cart update
	updateCart(cartItems: CartItem[]) {
		this.store.dispatch(new UpdateCartAction({ cartItems }));
		this.toastrService.success('Cart Updated.');
	}

	// Check whether product is in Cart or not
	isInCart(product: Product): boolean {
		return this.cartItems.find(item => item.id == product.id) ? true : false;
	}

	// Check where product could be added to the cart
	canAddToCart(product: Product, qty = 1) {
		var find = this.cartItems.find(item => item.id == product.id);

		if (find) {
			if (product.stock == 0 || (product.stock && product.stock < (find.qty + qty))) return false;
			else return true;
		} else {
			if (product.stock == 0 || (product.stock && product.stock < qty)) return false;
			else return true;
		}
	}
}