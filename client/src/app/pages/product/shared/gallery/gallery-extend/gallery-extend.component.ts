import { Component, OnInit, Input } from '@angular/core';
import { Lightbox } from 'ngx-lightbox';

import { Product } from 'src/app/shared/classes/product';
import { environment } from 'src/environments/environment';
import { sliderOpt } from 'src/app/shared/data';


@Component( {
	selector: 'product-gallery-extend',
	templateUrl: './gallery-extend.component.html',
	styleUrls: [ './gallery-extend.component.scss' ]
} )

export class GalleryExtendComponent implements OnInit {

	@Input() product: Product;
	@Input() loaded = false;

	options = {
		...sliderOpt,
		nav: true,
		dots: false,
		items: 3,
		margin: 20,
		loop: false,
		responsive: {
			0: {
				items: 1
			},
			576: {
				items: 2
			},
			992: {
				items: 3
			}
		}
	};

	SERVER_URL = environment.SERVER_URL;

	constructor( public lightBox: Lightbox ) { }

	ngOnInit (): void {
	}
}