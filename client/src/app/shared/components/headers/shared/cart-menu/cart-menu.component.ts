import { Component, OnInit } from '@angular/core';

import { CartService } from 'src/app/shared/services/cart.service';
import { environment } from 'src/environments/environment';

@Component({
	selector: 'molla-cart-menu',
	templateUrl: './cart-menu.component.html',
	styleUrls: ['./cart-menu.component.scss']
})

export class CartMenuComponent implements OnInit {

	SERVER_URL = environment.SERVER_URL;

	constructor(public cartService: CartService) {
	}

	ngOnInit(): void {
	}

	removeFromCart(event: Event, product: any) {
		event.preventDefault();
		this.cartService.removeFromCart(product);
	}
}