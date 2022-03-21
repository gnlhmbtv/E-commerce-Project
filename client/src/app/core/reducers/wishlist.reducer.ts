import { EntityState } from '@ngrx/entity';

import { Product } from '../../shared/classes/product';
import { ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST, REFRESH_STORE } from '../constants/constants';

export interface WishlistState extends EntityState<Product> {
    data: Product[]
}

function getState(key: string) {
    let initialState = {
        data: []
    };

    return (localStorage.getItem(key) && JSON.parse(localStorage.getItem(key)).wishlist) ? JSON.parse(localStorage.getItem(key)).wishlist : initialState;
}

export function wishlistReducer(state = getState('molla'), action) {
    switch (action.type) {
        case ADD_TO_WISHLIST:
            if (state.data.findIndex(item => item.id === action.payload.product.id) == -1) {
                return {
                    data: [
                        ...state.data,
                        action.payload.product
                    ]
                };
            }

            return state;

        case REMOVE_FROM_WISHLIST:
            return {
                data: state.data.filter(item => item.id !== action.payload.product.id)
            };

        case REFRESH_STORE:
            return { data: [] };

        default:
            return state;
    }
}