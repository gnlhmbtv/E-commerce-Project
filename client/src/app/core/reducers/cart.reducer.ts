import { EntityState } from '@ngrx/entity';

import {
    ADD_TO_CART,
    REMOVE_FROM_CART,
    UPDATE_CART,
    REFRESH_STORE
} from '../constants/constants';

import { CartItem } from '../../shared/classes/cart-item';

export interface CartItemState extends EntityState<CartItem> {
    data: CartItem[]
}

function getState(key: string) {
    let initialState = {
        data: []
    };

    return (localStorage.getItem(key) && JSON.parse(localStorage.getItem(key)).cart) ? JSON.parse(localStorage.getItem(key)).cart : initialState;
}

export function cartReducer(state = getState('molla'), action) {
    switch (action.type) {
        case ADD_TO_CART:
            var findIndex = state.data.findIndex(item => item.id == action.payload.product.id);
            let qty = action.payload.qty ? action.payload.qty : 1;
            if (findIndex !== -1 && action.payload.product.variants.length > 0) {
                findIndex = state.data.findIndex(item => item.name == action.payload.product.name);
            }

            if (findIndex !== -1) {
                return {
                    data: [
                        ...state.data.reduce((acc, product, index) => {
                            if (findIndex == index) {
                                acc.push({
                                    ...product,
                                    qty: product.qty + qty,
                                    sum: (action.payload.product.sale_price ? action.payload.product.sale_price : action.payload.product.price) * (product.qty + qty)
                                });
                            } else {
                                acc.push(product);
                            }

                            return acc;
                        }, [])
                    ]
                }
            } else {
                return {
                    data: [
                        ...state.data,
                        {
                            ...action.payload.product,
                            qty: qty,
                            price: action.payload.product.sale_price ? action.payload.product.sale_price : action.payload.product.price,
                            sum: qty * (action.payload.product.sale_price ? action.payload.product.sale_price : action.payload.product.price)
                        }
                    ]
                };
            }

        case REMOVE_FROM_CART:
            return {
                data: [
                    ...state.data.filter(item => {
                        if (item.id !== action.payload.product.id) return true;
                        if (item.name !== action.payload.product.name) return true;
                        return false;
                    })
                ]
            }

        case UPDATE_CART:
            return {
                data: [
                    ...action.payload.cartItems
                ]
            };

        case REFRESH_STORE:
            return { data: [] };

        default:
            return state;
    }
}
