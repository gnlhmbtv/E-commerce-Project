import { Component, OnInit } from '@angular/core';

import { accordionGroups } from './accordion-data';

@Component({
	selector: 'elements-accordions-page',
	templateUrl: './accordion.component.html',
	styleUrls: ['./accordion.component.scss']
})

export class AccordionsPageComponent implements OnInit {

	accordionGroups = accordionGroups;

	constructor() { }

	ngOnInit(): void { }
}
