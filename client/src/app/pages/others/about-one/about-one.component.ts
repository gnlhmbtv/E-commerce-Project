import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { customSay, team, brands } from './about-one-data';
import { sliderOpt } from 'src/app/shared/data';

@Component( {
	selector: 'pages-about-page',
	templateUrl: './about-one.component.html',
	styleUrls: [ './about-one.component.scss' ],
	changeDetection: ChangeDetectionStrategy.OnPush
} )

export class AboutOneComponent implements OnInit {

	customSay = customSay;
	brands = brands;
	team = team;
	sliderOption = {
		...sliderOpt,
		nav: false,
		dots: true,
		margin: 20,
		loop: false,
		responsive: {
			1200: {
				nav: true
			}
		}
	}
	teamOption = {
		...sliderOpt,
		nav: false,
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
	}

	constructor () {
	}

	ngOnInit (): void {
	}
}
