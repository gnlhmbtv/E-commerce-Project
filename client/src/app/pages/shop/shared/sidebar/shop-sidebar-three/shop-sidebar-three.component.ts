import { Component, OnInit, Input } from '@angular/core';

import { shopData } from '../../data';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
	selector: 'molla-shop-sidebar-three',
	templateUrl: './shop-sidebar-three.component.html',
	styleUrls: ['./shop-sidebar-three.component.scss']
})

export class ShopSidebarThreeComponent implements OnInit {

	@Input() toggle = false;

	shopData = shopData;
	params = {};

	constructor(public activeRoute: ActivatedRoute, public router: Router) {
		activeRoute.queryParams.subscribe(params => {
			this.params = params;
		})
	}

	ngOnInit(): void {
	}

	containsAttrInUrl(type: string, value: string) {
		const currentQueries = this.params[type] ? this.params[type].split(',') : [];
		return currentQueries && currentQueries.includes(value);
	}

	containsPriceInUrl(price: any) {
		let flag = false;
		if (this.params['minPrice'] && this.params['minPrice'] == price.min)
			flag = true;
		else return false;

		if (price.max) {
			if (
				this.params['maxPrice'] &&
				this.params['maxPrice'] == price.max
			)
				flag = true;
			else return false;
		}
		return true;
	}

	getUrlForAttrs(type: string, value: string) {
		let currentQueries = this.params[type] ? this.params[type].split(',') : [];
		currentQueries = this.containsAttrInUrl(type, value) ? currentQueries.filter(item => item !== value) : [...currentQueries, value];
		return currentQueries.join(',');
	}

	onAttrClick(attr: string, value: string) {
		this.router.navigate([], { queryParams: { [attr]: this.getUrlForAttrs(attr, value), page: 1 }, queryParamsHandling: 'merge' });
	}

	onPriceChange(event: any, value: any) {
		let queryParams: any;
		if (event.currentTarget.checked) {
			queryParams = { ...queryParams, minPrice: value.min, maxPrice: value.max, page: 1 };
		} else {
			queryParams = { ...queryParams, minPrice: 0, maxPrice: 9999, page: 1 };
		}

		this.router.navigate([], { queryParams: queryParams, queryParamsHandling: 'merge' });
	}
}
