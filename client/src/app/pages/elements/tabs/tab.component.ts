import { Component, OnInit } from '@angular/core';

import { horiTab, vertTab } from './tab-data';

@Component({
	selector: 'elements-tabs-page',
	templateUrl: './tab.component.html',
	styleUrls: ['./tab.component.scss']
})

export class TabsPageComponent implements OnInit {

	public horiData = horiTab;
	public vertData = vertTab;

	constructor() { }

	ngOnInit(): void {
	}
}
