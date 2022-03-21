import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'related-products-two',
	templateUrl: './related-products-two.component.html',
	styleUrls: ['./related-products-two.component.scss']
})

export class RelatedProductsTwoComponent implements OnInit {

	@Input() products = [];
	@Input() loaded = false;

	constructor() { }

	ngOnInit(): void {
	}
}
