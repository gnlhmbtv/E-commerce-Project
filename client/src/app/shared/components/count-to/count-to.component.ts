import { Component, OnInit, Input, ElementRef, Renderer2, HostListener } from '@angular/core';

@Component({
	selector: 'molla-count-to',
	templateUrl: './count-to.component.html',
	styleUrls: ['./count-to.component.scss']
})

export class CountToComponent implements OnInit {

	@Input() to: number;
	@Input() from: number;
	@Input() speed: number;
	@Input() interval: number;

	isExcuted = false;

	constructor(public elRef: ElementRef, private renderer: Renderer2) {
	}

	@HostListener('window:scroll', ['$event'])

	scrollHandler() {
		let pt = 0,
			amount = this.to - this.from,
			height = this.renderer.parentNode(this.renderer.parentNode(this.renderer.parentNode(this.elRef.nativeElement))).offsetTop

		if (!this.isExcuted && pt <= this.speed && height >= window.pageYOffset) {
			if (!this.isExcuted) {
				let timer = setInterval(() => {
					if (pt >= this.speed) {
						clearInterval(timer);
					}

					this.elRef.nativeElement.innerHTML = Math.ceil(pt * amount / this.speed).toString();
					pt = pt + this.interval;
				}, this.interval);
			}

			this.isExcuted = true;
		}
	}

	ngOnInit(): void {
	}
}
