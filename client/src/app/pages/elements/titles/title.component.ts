import { Component, OnInit } from '@angular/core';

import { itemNames, tabContent } from './title-data';

@Component({
	selector: 'elements-titles-page',
	templateUrl: './title.component.html',
	styleUrls: ['./title.component.scss']
})

export class TitlesPageComponent implements OnInit {

	public itemNames = itemNames;
	public tabContent = tabContent;

	constructor() {
	}

	ngOnInit(): void {
	}
}
