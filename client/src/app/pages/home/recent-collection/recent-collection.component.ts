import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'molla-recent-collection',
  templateUrl: './recent-collection.component.html',
  styleUrls: ['./recent-collection.component.scss']
})

export class RecentCollectionComponent implements OnInit {

  	@Input() products = [];
	@Input() loaded = false;

	constructor() {
	}

	ngOnInit(): void {
	}
}
