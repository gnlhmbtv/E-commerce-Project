import { Component, OnInit, Input, ElementRef, Renderer2 } from '@angular/core';

@Component({
	selector: 'molla-image',
	templateUrl: './image.component.html',
	styleUrls: ['./image.component.scss']
})

export class ImageComponent implements OnInit {

	@Input() src: string;
	@Input() width: string | number = 1;
	@Input() height: string | number = 1;
	@Input() fixedPt: string | number;
	@Input() minHeight: string;
	@Input() alt = 'banner';
	@Input() backgroundColor: string;

	defaultImage = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';

	constructor(private el: ElementRef, private renderer: Renderer2) { }

	ngOnInit(): void {
	}

	handler(event: any) {
		switch (event.reason) {
			case 'setup':
				let value: string | number = '100%';

				if (this.fixedPt) {
					value = this.fixedPt;
				} else if (this.height && this.width) {
					value = Math.floor((parseFloat(this.height.toString()) / parseFloat(this.width.toString()) * 1000)) / 10 + '%';
				} else {
					value = '100%';
				}

				this.renderer.setStyle(this.el.nativeElement, 'padding-top', value);

				if (this.minHeight) {
					this.renderer.setStyle(this.el.nativeElement, 'min-height', this.minHeight + 'rem');
				}

				if (this.backgroundColor) {
					this.renderer.setStyle(this.el.nativeElement, 'background-color', this.backgroundColor);
				}
				break;
			case 'observer-emit':
				break;
			case 'loading-succeeded':
				if (this.minHeight) {
					this.renderer.setStyle(this.el.nativeElement.querySelector('img'), 'min-height', this.minHeight + 'rem');
				}
				break;
			default:
				break
		}
	}
}
