import { Component, OnInit } from '@angular/core';

import { sliders } from './testimonial-data';

@Component({
	selector: 'elements-testimonial-page',
	templateUrl: './testimonial.component.html',
	styleUrls: ['./testimonial.component.scss']
})

export class TestimonialPageComponent implements OnInit {

	testSliders = sliders;

	constructor() {
	}

	ngOnInit(): void {
	}
}