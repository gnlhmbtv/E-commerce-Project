import { Pipe, PipeTransform } from '@angular/core';

import { Product } from '../classes/product';

@Pipe({
	name: 'catFilter',
	pure: true
})

export class CatFilterPipe implements PipeTransform {

	transform(products: Product[], category: string[], flag = false): Product[] {
		if (category[0] === 'all') return products;

		return products.filter(item => {
			for (let i = 0; i < category.length; i++) {
				if (item.category.find(cat => cat.slug == category[i])) {
					if (!flag) return true;
				} else {
					if (flag) return false;
				}
			}

			if (flag)
				return true;
			else
				return false;
		})
	}
}
