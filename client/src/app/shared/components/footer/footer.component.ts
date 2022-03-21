import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'molla-footer',
	templateUrl: './footer.component.html',
	styleUrls: ['./footer.component.scss']
})

export class FooterComponent implements OnInit {

	@Input() containerClass = "container";
	@Input() isBottomSticky = false;

	year: any;

	constructor() {
	}

	ngOnInit(): void {
		this.year = (new Date()).getFullYear();
	}
}
