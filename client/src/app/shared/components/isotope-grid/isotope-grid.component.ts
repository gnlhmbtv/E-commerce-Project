import { Component, OnInit, Input, ElementRef, AfterViewInit, AfterViewChecked, Renderer2 } from '@angular/core';

declare var Isotope: any;
declare var imagesLoaded: any;
declare var $: any;

@Component({
	selector: 'molla-isotope-grid',
	templateUrl: './isotope-grid.component.html',
	styleUrls: ['./isotope-grid.component.scss']
})

export class IsotopeGridComponent implements OnInit, AfterViewInit, AfterViewChecked {

	@Input() dataChange = false;
	@Input() adClass = "";
	@Input() options: any;

	isotope: any;
	isReset = false;

	constructor(private el: ElementRef, private renderer: Renderer2) { }

	ngOnInit(): void {
	}

	ngAfterViewInit() {
		let self = this;
		this.renderer.setAttribute(this.el.nativeElement, 'style', 'display: block; overflow: hidden;');
		self.isotope = new Isotope(this.el.nativeElement, self.options);

		imagesLoaded(this.el.nativeElement, function (el) {
			self.isotope.layout();
		});
	}

	ngAfterViewChecked() {
		if (this.isReset) {
			let children = this.el.nativeElement.querySelectorAll(this.options.itemSelector);

			if (!this.dataChange) {
				for (let i = 0; i < children.length; i++) {
					if (!children[i].getAttribute('style')) {
						this.renderer.setStyle(children[i], 'opacity', '0');
					}
				}
			}

			let self = this;
			imagesLoaded(this.el.nativeElement, function (el) {
				let items = self.isotope.getItemElements();
				children = el.elements[0].querySelectorAll(self.options.itemSelector);

				if (self.dataChange) {
					self.isotope.reloadItems();
					self.isotope.arrange();
					self.dataChange = false;
				} else {
					for (let i = 0; i < items.length; i++) {
						if (!el.elements[0].contains(items[i])) {
							self.isotope.remove(items[i]);
						}
					}
					self.isotope.layout();
					for (let i = 0; i < children.length; i++) {
						if (items.indexOf(children[i]) < 0) {
							children[i].setAttribute('style', 'opacity: 1');
							self.isotope.appended(children[i]);
						}
					}
				}

				self.isotope.layout();
			});

			this.isReset = false;
		}
	}

	destroy() {
		this.isotope.destroy();
	}

	layout() {
		let self = this;
		this.renderer.setAttribute(this.el.nativeElement, 'style', 'display: block;');

		imagesLoaded(this.el.nativeElement, function (el) {
			self.isotope = new Isotope(el.elements[0], self.options);
		});
	}

	filter(filterString: string, duration = "0.7s") {
		this.isotope.arrange({
			filter: filterString,
			transitionDuration: duration
		});
	}

	sort(sortBy: string) {
		this.isotope.arrange({
			sort: sortBy,
			transitionDuration: '0.7s'
		})
		this.isotope.arrange({
			getSortData: {
				title: '.title a',
				price: '.product-price parseInt'
			},
			sortBy: ['title', 'price']
		});
	}
}
