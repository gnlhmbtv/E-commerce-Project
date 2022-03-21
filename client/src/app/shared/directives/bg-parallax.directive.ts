import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
	selector: '[bgParallax]'
})

export class BgParallaxDirective {

	@Input() offset = 50;
	@Input() speed = 900;

	constructor(public el: ElementRef) {
	}

	@HostListener('window:scroll', ['$event'])
	onScroll(event: Event) {
		let parallax = this.el.nativeElement;
		let y = 0;

		y = (parallax.offsetTop - window.pageYOffset) * 47 / parallax.offsetTop + this.offset;

		parallax.style.backgroundPositionY = y + "%";
	}
}