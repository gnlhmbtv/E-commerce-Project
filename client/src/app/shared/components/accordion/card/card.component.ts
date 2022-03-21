import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'molla-card',
	templateUrl: './card.component.html',
	styleUrls: ['./card.component.scss']
})

export class CardComponent implements OnInit {

	@Input() adClass: string;
	@Input() icon: string;
	@Input() parent: string;
	@Input() show = false;
	@Input() title: string;

	bodyID: string;

	constructor() {
		this.bodyID = 'collapse-' + Math.ceil(Math.random() * 1000);
	}

	ngOnInit(): void {
	}
}
