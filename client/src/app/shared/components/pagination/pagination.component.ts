import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
	selector: 'molla-pagination',
	templateUrl: './pagination.component.html',
	styleUrls: ['./pagination.component.scss']
})

export class PaginationComponent implements OnInit, OnChanges {

	@Input() adClass = '';
	@Input() perPage = 12;
	@Input() total = 6;

	currentPage = 1;
	lastPage = 1;
	startIndex = 1;
	pagesToBeShown = [];
	params = {};

	constructor(public activeRoute: ActivatedRoute, public router: Router) {
		activeRoute.queryParams.subscribe(params => {
			this.params = params;
			this.refresh();
		})
	}

	ngOnChanges() {
		this.refresh();
	}

	ngOnInit(): void {
	}

	refresh() {
		this.currentPage = this.params['page'] ? parseInt(this.params['page']) : 1;
		this.lastPage = Math.floor(this.total / this.perPage) + (this.total % this.perPage ? 1 : 0);
		this.startIndex = !(this.currentPage % this.perPage) ? this.currentPage : this.perPage * Math.floor(this.currentPage / this.perPage);

		this.pagesToBeShown = [];

		let pageCount =
			Math.floor(this.total / this.perPage) +
			(0 < this.total % this.perPage ? 1 : 0);

		for (let i = -1; i < 2 && pageCount >= 3; i++) {
			if (1 < this.currentPage && this.currentPage < pageCount)
				this.pagesToBeShown.push(this.currentPage + i);
			if (1 === this.currentPage)
				this.pagesToBeShown.push(this.currentPage + i + 1);
			if (this.currentPage === pageCount)
				this.pagesToBeShown.push(this.currentPage + i - 1);
		}

		for (let i = 0; i < pageCount && pageCount < 3; i++) {
			this.pagesToBeShown.push(i + 1);
		}
	}
}