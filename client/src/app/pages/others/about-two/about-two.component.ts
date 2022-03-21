import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { iconBoxes, counters, brands, members } from './about-two-data';

@Component({
	selector: 'pages-about-two-page',
	templateUrl: './about-two.component.html',
	styleUrls: ['./about-two.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})

export class AboutTwoPageComponent implements OnInit {

	iconBoxes = iconBoxes;
	brands = brands;
	members = members;
	counters = counters;

	constructor(public sanitizer: DomSanitizer) {
	}

	ngOnInit(): void {
	}
}
