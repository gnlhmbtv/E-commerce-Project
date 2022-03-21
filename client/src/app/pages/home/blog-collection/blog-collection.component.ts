import { Component, OnInit, Input } from '@angular/core';

import { blogSlider } from '../data';

@Component({
	selector: 'molla-blog-collection',
	templateUrl: './blog-collection.component.html',
	styleUrls: ['./blog-collection.component.scss']
})

export class BlogCollectionComponent implements OnInit {

	@Input() posts = [];
	@Input() loaded = false;

	sliderOption = blogSlider

	constructor() { }

	ngOnInit(): void {
	}
}
