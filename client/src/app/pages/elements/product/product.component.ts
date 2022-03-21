import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { ApiService } from 'src/app/shared/services/api.service';
import { productSlider1, productSlider2 } from '../shared/data';

@Component({
	selector: 'element-product-page',
	templateUrl: './product.component.html',
	styleUrls: ['./product.component.scss']
})

export class ProductPageComponent implements OnInit, OnDestroy {

	products = [];
	sliderOption1 = productSlider1;
	sliderOption2 = productSlider2;
	loaded = false;

	private subscr: Subscription;

	constructor(private apiService: ApiService) { }

	ngOnInit(): void {
		this.subscr = this.apiService.fetchElementData().subscribe(items => {
			this.products = items;
			this.loaded = true;
		})
	}

	ngOnDestroy(): void {
		this.subscr.unsubscribe();
	}
}