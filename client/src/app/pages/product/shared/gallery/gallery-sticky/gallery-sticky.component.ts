import { Component, OnInit, Input, HostListener } from '@angular/core';
import { Lightbox } from 'ngx-lightbox';

import { Product } from 'src/app/shared/classes/product';
import { environment } from 'src/environments/environment';

@Component({
	selector: 'product-gallery-sticky',
	templateUrl: './gallery-sticky.component.html',
	styleUrls: ['./gallery-sticky.component.scss']
})

export class GalleryStickyComponent implements OnInit {
	@Input() product: Product;

	paddingTop = '100%';
	currentIndex = 0;
	album = [];
	lightBoxOption = {
		showImageNumberLabel: true,
		centerVertically: true,
		showZoom: true,
		fadeDuration: .2,
		albumLabel: "%1 / %2"
	}

	SERVER_URL = environment.SERVER_URL;

	constructor(public lightBox: Lightbox) { }

	@HostListener('window:resize', ['$event'])
	closeLightBox(event: Event) {
		this.lightBox.close();
	}

	ngOnChanges() {
		this.album = [];

		for (let i = 0; i < this.product.pictures.length; i++) {
			this.album.push({
				src: this.SERVER_URL + this.product.pictures[i].url,
				thumb: this.SERVER_URL + this.product.sm_pictures[i].url,
				caption: this.product.name
			});
		}
	}

	ngOnInit(): void {
		this.paddingTop = Math.floor((parseFloat(this.product.pictures[0].height.toString()) / parseFloat(this.product.pictures[0].width.toString()) * 1000)) / 10 + '%';
	}

	changeImage($event: Event, index = 0) {
		this.currentIndex = index;
		$event.preventDefault();
	}

	openLightBox() {
		this.lightBox.open(this.album, this.currentIndex, this.lightBoxOption)
	}
}
