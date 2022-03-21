import { Action } from '@ngrx/store';

import * as types from '../constants/constants';
import { Product } from '../../shared/classes/product';
import { CartItem } from '../../shared/classes/cart-item';

/************************** Cart Action ***************************/

/**
 * Add to Cart
 */
export class AddToCartAction implements Action {
    readonly type = types.ADD_TO_CART;
    constructor(public payload: { product: Product, qty: number }) { }
}

/**
 * Remove from Cart
 */
export class RemoveFromCartAction implements Action {
    readonly type = types.REMOVE_FROM_CART;
    constructor(public payload: { product: CartItem }) { }
}

/**
 * Update Cart Items with qtys
 */
export class UpdateCartAction implements Action {
    readonly type = types.UPDATE_CART;
    constructor(public payload: { cartItems: CartItem[] }) { }
}


/************************** Wishlist Action ***************************/

/**
 * Add to Wishlist
 */
export class AddToWishListAction implements Action {
    readonly type = types.ADD_TO_WISHLIST;
    constructor(public payload: { product: Product }) { }
}

/**
 * Remove from WishList
 */
export class RemoveFromWishListAction implements Action {
    readonly type = types.REMOVE_FROM_WISHLIST;
    constructor(public payload: { product: Product }) { }
}



/************************** Compare Action ***************************/

/**
 * Add to Compare
 */
export class AddToCompareAction implements Action {
    readonly type = types.ADD_TO_COMPARE;
    constructor(public payload: { product: Product }) { }
}

/**
 * Remove from Compare
 */
export class RemoveFromCompareAction implements Action {
    readonly type = types.REMOVE_FROM_COMPARE;
    constructor(public payload: { product: Product }) { }
}

/**
 * Remove all in compare list
 */
export class ClearAllCompareAction implements Action {
    readonly type = types.REMOVE_ALL_COMPARE;
    constructor(public payload: {}) { }
}

/**
 * Refresh store when demo changes
 */
export class RefreshStoreAction implements Action {
    readonly type = types.REFRESH_STORE;
    constructor() { }
}