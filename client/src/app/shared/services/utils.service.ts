import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

declare var $: any;

@Injectable({
	providedIn: 'root'
})

export class UtilsService {

	isSticky = false;
	isFluidLayout = false;
	stickyHeight = 54;

	constructor(@Inject(DOCUMENT) private document) {
	}

	/**
	 * utils to detect safari browser
	 * @return {bool}
	 */
	isSafariBrowser(): boolean {
		let sUsrAg = navigator.userAgent;
		if (sUsrAg.indexOf('Safari') !== -1 && sUsrAg.indexOf('Chrome') === -1)
			return true;
		return false;
	}

	/**
	 * utils to detect Edge browser
	 * @return {bool}
	 */
	isEdgeBrowser(): boolean {
		let sUsrAg = navigator.userAgent;
		if (sUsrAg.indexOf("Edge") > -1)
			return true;
		return false;
	}

	/**
	 * utils to set header sticky
	 */
	setStickyHeader() {
		let outerHeight = $('.header').outerHeight();

		if (window.pageYOffset > outerHeight && window.innerWidth > 991 && $('.sticky-header')) {
			this.isSticky = true;
			this.stickyHeight = $('.sticky-header').outerHeight();
		} else {
			this.isSticky = false;
		}
	}

	/**
	 * Scrolling to Page content section
	 */
	scrollToPageContent(target = '.page-content') {
		let to = (document.querySelector(target) as HTMLElement).offsetTop - 74;
		if (this.isSafariBrowser() || this.isEdgeBrowser()) {
			let pos = window.pageYOffset;
			let timerId = setInterval(() => {
				if (pos <= to) clearInterval(timerId);
				else {
					window.scrollBy(0, -120);
					pos -= 120;
				}
			}, 1);
		} else {
			window.scrollTo({
				top: to,
				behavior: 'smooth'
			});
		}
	}

	/**
	 * Scroll Top Button
	 * @param e 
	 */
	scrollTop(e: Event) {
		if (this.isSafariBrowser() || this.isEdgeBrowser()) {
			let pos = window.pageYOffset;
			let timer_id = setInterval(() => {
				if (pos <= 0)
					clearInterval(timer_id);
				window.scrollBy(0, -120);
				pos -= 120;
			}, 1);
		} else {
			window.scrollTo({
				top: 0,
				behavior: 'smooth'
			})
		}
		e.preventDefault();
	}

	catFilter(products = [], category: any, flag = false) {
		if (category[0] === 'All') return products;

		return products.filter(item => {
			for (let i = 0; i < category.length; i++) {
				if (item.category.find(cat => cat.slug == category[i])) {
					if (!flag) return true;
				} else {
					if (flag) return false;
				}
			}

			if (flag)
				return true;
			else
				return false;
		})
	}

	attrFilter(products = [], attr: string) {
		return products.filter(item => {
			if (attr === 'all') {
				return true;
			}

			if (attr === 'sale' && item.sale_price) {
				return true;
			}

			if (attr === 'rated' && item.ratings > 3) {
				return true;
			}

			if (attr === 'until' && item.until) {
				return true;
			}

			return item[attr] === true;
		});
	}
}