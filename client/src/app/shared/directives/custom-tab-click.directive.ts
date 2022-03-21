import { Directive, Renderer2, HostListener } from '@angular/core';

@Directive({
	selector: '[tabClick]'
})

export class TabClickDirective {

	constructor(private render: Renderer2) { }

	@HostListener('click', ['$event'])
	onClick(e: any) {
		// remove previous active tab
		const parent = e.target.closest('[role="tablist"]');
		const activeLink = parent.querySelector('[role="tab"].active');

		if (activeLink) {
			this.render.removeClass(activeLink, 'active');
		}

		// set active tab
		const currentLink = e.target.closest('[role="tab"]');
		if (currentLink) {
			this.render.addClass(currentLink, 'active');
		}

		e.preventDefault();
	}
}
