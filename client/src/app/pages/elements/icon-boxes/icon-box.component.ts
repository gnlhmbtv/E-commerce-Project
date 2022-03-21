import { Component, OnInit } from '@angular/core';

import { iconBoxes } from './icon-box-data';

@Component({
	selector: 'elements-icon-boxes-page',
	templateUrl: './icon-box.component.html',
	styleUrls: ['./icon-box.component.scss']
})

export class IconBoxesPageComponent implements OnInit {

	public items = iconBoxes;

	constructor() { }

	ngOnInit(): void {
	}
}
