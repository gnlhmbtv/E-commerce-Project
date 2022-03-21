import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { ToastrService } from 'ngx-toastr';
import { Subject, BehaviorSubject } from 'rxjs';

import { Product } from 'src/app/shared/classes/product';
import { compareSelector } from 'src/app/core/selectors/selectors';
import { AddToCompareAction, RemoveFromCompareAction, ClearAllCompareAction } from 'src/app/core/actions/actions';

@Injectable({
	providedIn: 'root'
})

export class CompareService {

	public compareItems = [];
	public compareStream: Subject<Product[]> = new BehaviorSubject([]);
	public compareQty: Subject<number> = new BehaviorSubject( 0 );

	constructor(private store: Store<any>, private toastrService: ToastrService) {
		store.pipe(select(compareSelector)).subscribe(items => {
			this.compareItems = items;
			this.compareStream.next(items);
			this.compareQty.next(items.length);
		})
	}

	// Product added to Compare
	addToCompare(product: Product) {
		if (this.compareItems.findIndex(item => item.id === product.id) === -1) {
			this.store.dispatch(new AddToCompareAction({ product }));
			this.toastrService.success('Product added to Compare.');
		}
	}

	// Product removed from Compare
	removeFromCompare(product: Product) {
		this.store.dispatch(new RemoveFromCompareAction({ product }));
		this.toastrService.error('Product removed from Compare.');
	}

	// Remove all products from Compare
	clearAllCompare() {
		this.store.dispatch(new ClearAllCompareAction({}));
	}

	// Check whether product is in Compare or not
	isInCompare(product: Product) {
		return this.compareItems.find(item => item.id == product.id) ? true : false;
	}
}
