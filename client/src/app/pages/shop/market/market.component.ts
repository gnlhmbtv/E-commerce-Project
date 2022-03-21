import { Component, OnInit, HostListener } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ApiService } from 'src/app/shared/services/api.service';
import { UtilsService } from 'src/app/shared/services/utils.service';

import { cats, brands, bannerSlider, brandSlider } from './data';

@Component({
	selector: 'shop-market-page',
	templateUrl: './market.component.html',
	styleUrls: ['./market.component.scss']
})

export class MarketPageComponent implements OnInit {

	brands = brands;
	cats = cats;
	introSlider = bannerSlider;
	brandSlider = brandSlider;
	products = [];
	perPage = 8;
	type: 'list';
	totalCount = 0;
	orderBy = 'default';
	pageTitle = 'List';
	toggle = false;
	searchTerm = '';
	loaded = false;
	firstLoad = false;

	constructor(public activeRoute: ActivatedRoute, public router: Router, public apiService: ApiService, public utilsService: UtilsService) {
		this.activeRoute.queryParams.subscribe(params => {
			this.loaded = false;

			if (params['searchTerm']) {
				this.searchTerm = params['searchTerm'];
			} else {
				this.searchTerm = '';
			}

			if (params['orderBy']) {
				this.orderBy = params['orderBy'];
			} else {
				this.orderBy = 'default';
			}

			this.apiService.fetchShopData(params, this.perPage).subscribe(result => {
				this.products = result.products;
				this.totalCount = result.totalCount;
				this.loaded = true;

				if (!this.firstLoad) {
					this.firstLoad = true;
				}

				this.utilsService.scrollToPageContent('.products');
			})
		})
	}

	ngOnInit(): void {
		if (window.innerWidth > 991) this.toggle = false;
		else this.toggle = true;
	}

	@HostListener('window: resize', ['$event'])
	onResize(event: Event) {
		if (window.innerWidth > 991) this.toggle = false;
		else this.toggle = true;
	}

	changeOrderBy(event: any) {
		this.router.navigate([], { queryParams: { orderBy: event.currentTarget.value, page: 1 }, queryParamsHandling: 'merge' });
	}

	toggleSidebar() {
		if (document.querySelector('body').classList.contains('sidebar-filter-active'))
			document.querySelector('body').classList.remove('sidebar-filter-active');
		else
			document.querySelector('body').classList.add('sidebar-filter-active');
	}

	hideSidebar() {
		document.querySelector('body').classList.remove('sidebar-filter-active');
	}
}
