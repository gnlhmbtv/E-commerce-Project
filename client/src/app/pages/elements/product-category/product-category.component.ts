import { Component, OnInit } from '@angular/core';

import { sliderOpt } from 'src/app/shared/data';

@Component({
	selector: 'elments-product-category-page',
	templateUrl: './product-category.component.html',
	styleUrls: ['./product-category.component.scss']
})

export class ProductCategoryPageComponent implements OnInit {

	sliderOption = {
		...sliderOpt,
		nav: false,
		dots: true,
		margin: 20,
		loop: false,
		responsive: {
			0: {
				items: 1
			},
			480: {
				items: 2
			},
			768: {
				items: 3
			},
			992: {
				items: 4
			},
			1200: {
				items: 4,
				nav: true,
				dots: false
			}
		}
	}

	constructor() { }

	ngOnInit(): void {
	}
}