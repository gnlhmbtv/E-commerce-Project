import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ApiService } from 'src/app/shared/services/api.service';
import { UtilsService } from 'src/app/shared/services/utils.service';

import { environment } from 'src/environments/environment';

@Component({
	selector: 'molla-header-search',
	templateUrl: './header-search.component.html',
	styleUrls: ['./header-search.component.scss']
})

export class HeaderSearchComponent implements OnInit, OnDestroy {

	products = [];
	searchTerm = "";
	cat = null;
	suggestions = [];
	timer: any;
	SERVER_URL = environment.SERVER_URL;

	constructor(public activeRoute: ActivatedRoute, public router: Router, public utilsService: UtilsService, public apiService: ApiService) {
	}

	ngOnInit(): void {
		document.querySelector('body').addEventListener('click', this.closeSearchForm);
	}

	ngOnDestroy(): void {
		document.querySelector('body').removeEventListener('click', this.closeSearchForm);
	}

	searchProducts(event: any) {
		this.searchTerm = event.target.value;
		if (this.searchTerm.length > 2) {
			if (this.timer) {
				window.clearTimeout(this.timer);
			}

			this.timer = setTimeout(() => {
				this.apiService.fetchHeaderSearchData(this.searchTerm).subscribe(result => {
					this.suggestions = result.products.reduce(
						(acc, cur) => {
							let max = 0;
							let min = 99999;
							cur.variants.map(item => {
								if (min > item.price)
									min = item.price;
								if (max < item.price)
									max = item.price;
							}, []);

							if (cur.variants.length == 0) {
								min = cur.sale_price
									? cur.sale_price
									: cur.price;
								max = cur.price;
							}
							return [
								...acc,
								{
									...cur,
									minPrice: min,
									maxPrice: max
								}
							];
						},
						[]
					);
				})
			}, 500)
		} else {
			window.clearTimeout(this.timer);
			this.suggestions = [];
		}
	}

	matchEmphasize(name: string) {
		var regExp = new RegExp(this.searchTerm, 'i');
		return name.replace(
			regExp,
			match => '<strong>' + match + '</strong>'
		);
	}

	goProductPage() {
		this.searchTerm = '';
		this.suggestions = [];
		var inputElement: any = document.querySelector('.header-search .form-control');
		inputElement.value = "";
		this.closeSearchForm();
	}

	searchToggle(e: Event) {
		document.querySelector('.header-search').classList.toggle('show');
		e.stopPropagation();
	}

	showSearchForm(e: Event) {
		document
			.querySelector('.header .header-search')
			.classList.add('show');
		e.stopPropagation();
	}

	closeSearchForm() {
		document
			.querySelector('.header .header-search')
			.classList.remove('show');
	}

	submitSearchForm(e: Event) {
		e.preventDefault();
		this.router.navigate(['/shop/sidebar/3cols'], { queryParams: { searchTerm: this.searchTerm } });
	}
}
