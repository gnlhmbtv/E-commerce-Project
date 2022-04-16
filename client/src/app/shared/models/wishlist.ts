import {v4 as uuidv4} from 'uuid'
 
export interface IWishlist {
       id: string;
       items: IWishlistItem[];
   }

   export interface IWishlistItem {
       id: number;
       productName: string;
       price: number;
       quantity: number;
       photoUrl: string;
       brand: string;
       type: string;
       size: string;
       color: string;
   }

   export class Wishlist implements IWishlist{
    id = uuidv4();
    items: IWishlistItem[] = [];
}



