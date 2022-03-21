import { Pipe, PipeTransform } from '@angular/core';

import { Product } from '../classes/product';

@Pipe( {
	name: 'attrFilter',
	pure: true
} )

export class AttrFilterPipe implements PipeTransform {

	transform ( products: Product[], attr: string ): Product[] {
		return products.filter( item => {
			if ( attr === 'all' ) {
				return true;
			}

			if ( attr === 'sale' && item.sale_price ) {
				return true;
			}

			if ( attr === 'rated' && item.ratings > 3 ) {
				return true;
			}

			if ( attr === 'until' && item.until ) {
				return true;
			}

			return item[ attr ] === true;
		} );
	}
}
