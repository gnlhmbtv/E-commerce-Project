import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/shared/classes/product';

@Component({
	selector: 'product-info-one',
	templateUrl: './info-one.component.html',
	styleUrls: ['./info-one.component.scss']
})

export class InfoOneComponent implements OnInit {

	@Input() product: Product;

	constructor() { }

	ngOnInit(): void {
	}

	setRating = (event: any) => {
		event.preventDefault();

		if (event.currentTarget.parentNode.querySelector('.active')) {
			event.currentTarget.parentNode.querySelector('.active').classList.remove('active');
		}

		event.currentTarget.classList.add('active');
	}
}