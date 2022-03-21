import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'molla-shop-list-two',
	templateUrl: './shop-list-two.component.html',
	styleUrls: ['./shop-list-two.component.scss']
})

export class ShopListTwoComponent implements OnInit {

	@Input() products = [];
	@Input() loaded = false;

	constructor() {
	}

	ngOnInit(): void {
	}
}
