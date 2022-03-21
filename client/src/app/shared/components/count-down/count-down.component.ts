import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'molla-count-down',
	templateUrl: './count-down.component.html',
	styleUrls: ['./count-down.component.scss']
})

export class CountDownComponent implements OnInit {

	@Input() compact: boolean;
	@Input() format: string;
	@Input() elements = 4;
	@Input() labelsShort: boolean;
	@Input() until: string;
	@Input() wrap: string;

	cdId: string;
	days: number;
	hours: number;
	minutes: number;
	seconds: number;
	time: any;

	constructor() {
		this.cdId = 'countd-down' + Math.ceil(Math.random() * 1000);
	}

	ngOnInit(): void {
		this.time = this.until.substring(1, this.until.length - 1);
		switch (this.until[this.until.length - 1]) {
			case 'h':
				this.time = this.time * 3600;
				break;
			case 'm':
				this.time = this.time * 60;
				break;
			case 'd':
				this.time = this.time * 3600 * 24;
				break;
			default:
				break;
		}

		let until: any = new Date(this.until);
		let current: any = new Date();
		let time = (until - current) / 1000;

		if (this.until.substring(0, 1) === '+') time = this.time;

		this.days = Math.floor(time / (3600 * 24));
		this.hours = Math.floor(time % (3600 * 24) / 3600);
		this.minutes = Math.floor(time % 3600 / 60);
		this.seconds = Math.floor(time % 60);

		setInterval(() => {
			let until: any = new Date(this.until);
			let current: any = new Date();
			let time = (until - current) / 1000;

			if (this.until.substring(0, 1) === '+') time = this.time;
			this.time--;

			this.days = Math.floor(time / (3600 * 24));
			this.hours = Math.floor(time % (3600 * 24) / 3600);
			this.minutes = Math.floor(time % 3600 / 60);
			this.seconds = Math.floor(time % 60);
		}, 1000)
	}
}