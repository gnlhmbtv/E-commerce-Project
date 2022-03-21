import { Component, OnInit, Input } from '@angular/core';

import { sliderOpt } from 'src/app/shared/data';

@Component( {
	selector: 'related-products-one',
	templateUrl: './related-products-one.component.html',
	styleUrls: [ './related-products-one.component.scss' ]
} )

export class RelatedProductsOneComponent implements OnInit {

	@Input() products = [];
	@Input() loaded = false;

	options = {
		...sliderOpt,
		nav: false,
		dots: true,
		margin: 20,
		loop: false,
		responsive: {
			0: {
				items: 2
			},
			480: {
				items: 2
			},
			768: {
				items: 3,
			},
			992: {
				items: 3,
			},
			1200: {
				items: 4,
				dots: false,
			},
			1400: {
				items: 4,
				nav: true,
				dots: false
			}
		}
	};

	constructor () { }

	ngOnInit (): void {
	}
}
