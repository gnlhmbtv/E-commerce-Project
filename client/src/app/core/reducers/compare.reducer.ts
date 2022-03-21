import { EntityState } from '@ngrx/entity';

import { Product } from '../../shared/classes/product';
import { ADD_TO_COMPARE, REMOVE_FROM_COMPARE, REMOVE_ALL_COMPARE, REFRESH_STORE } from '../constants/constants';

export interface CompareState extends EntityState<Product> {
    data: Product[]
}

function getState ( key: string ) {
    let initialState = {
        data: []
    };

    return ( localStorage.getItem( key ) && JSON.parse( localStorage.getItem( key ) ).compare ) ? JSON.parse( localStorage.getItem( key ) ).compare : initialState;
}

export function compareReducer ( state = getState( 'molla' ), action ) {
    switch ( action.type ) {
        case ADD_TO_COMPARE:
            if ( state.data.findIndex( item => item.id == action.payload.product.id ) == -1 ) {
                return {
                    data: [
                        ...state.data,
                        action.payload.product
                    ]
                };
            }

            return state;

        case REMOVE_FROM_COMPARE:
            return {
                data: state.data.filter( item => item.id != action.payload.product.id )
            };

        case REMOVE_ALL_COMPARE:
            return {
                data: []
            }

        case REFRESH_STORE:
            return {
                data: []
            }

        default:
            return state;
    }
}
