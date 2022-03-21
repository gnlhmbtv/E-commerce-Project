import { Component, OnInit, Input } from '@angular/core';

import { Product } from '../../classes/product';

import { environment } from 'src/environments/environment';

@Component({
	selector: 'molla-breadcrumb',
	templateUrl: './breadcrumb.component.html',
	styleUrls: ['./breadcrumb.component.scss']
})

export class BreadcrumbComponent implements OnInit {

	@Input() prev: Product;
	@Input() next: Product;
	@Input() current: string;
	@Input() fullWidth = false;

	SERVER_URL = environment.SERVER_URL;

	constructor() {
	}

	ngOnInit(): void {
	}
}