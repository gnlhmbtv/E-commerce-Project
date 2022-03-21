import { Component, OnInit, Input } from '@angular/core';
import { productSlider } from '../data';

@Component({
	selector: 'molla-top-collection',
	templateUrl: './top-collection.component.html',
	styleUrls: ['./top-collection.component.scss']
})

export class TopCollectionComponent implements OnInit {

	@Input() products = [];
	@Input() loaded = false;
	sliderOption = productSlider;

	categories = [['all'], ['women'], ['men']];
	titles = { "all": "All", "women": "Women", "men": "Men" };

	constructor() { }

	ngOnInit(): void {
	}
}
