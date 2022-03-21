import {Cookie} from 'js-cookie';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { NgbModalOptions, NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Product } from 'src/app/shared/classes/product';

import { QuickViewComponent } from 'src/app/shared/components/modals/quick-view/quick-view.component';
import { QuickViewTwoComponent } from 'src/app/shared/components/modals/quick-view-two/quick-view-two.component';
import { NewsletterModalComponent } from '../components/modals/newsletter-modal/newsletter-modal.component';
import { LoginModalComponent } from '../components/modals/login-modal/login-modal.component';
import { VideoModalComponent } from '../components/modals/video-modal/video-modal.component';

import { environment } from 'src/environments/environment';

@Injectable({
	providedIn: 'root'
})

export class ModalService {
	products = [];
	timer: any;

	private modalOption1: NgbModalOptions = {
		centered: true,
		size: 'xl',
		windowClass: 'newsletter-modal',
		beforeDismiss: async () => {
			document.querySelector('body')?.classList.remove('modal-open');

			await new Promise((resolve) => {
				setTimeout(() => {
					resolve('success');
				}, 250)
			});

			(document.querySelector('.logo') as HTMLElement).focus({ preventScroll: true });

			return true;
		}
	};

	private modalOption2: NgbModalOptions = {
		centered: true,
		size: 'lg',
		windowClass: 'login-modal',
		beforeDismiss: async () => {
			document.querySelector('body')?.classList.remove('modal-open');

			await new Promise((resolve) => {
				setTimeout(() => {
					resolve('success');
				}, 300)
			});

			(document.querySelector('.logo') as HTMLElement).focus({ preventScroll: true });

			return true;
		}
	}

	private modalOption3: NgbModalOptions = {
		centered: true,
		size: 'xl',
		scrollable: false,
		windowClass: "vb-modal",
		beforeDismiss: async () => {
			document.querySelector('body')?.classList.remove('modal-open');

			await new Promise((resolve) => {
				setTimeout(() => {
					resolve('success');
				}, 300)
			});

			(document.querySelector('.logo') as HTMLElement).focus({ preventScroll: true });

			return true;
		}
	};

	private modalOption4: NgbModalOptions = {
		centered: true,
		size: 'xl',
		beforeDismiss: async () => {
			document.querySelector('body')?.classList.remove('modal-open');

			await new Promise((resolve) => {
				setTimeout(() => {
					resolve('success');
				}, 300)
			});


			(document.querySelector('.logo') as HTMLElement).focus({ preventScroll: true });

			return true;
		}
	};

	constructor(private modalService: NgbModal, private router: Router, private http: HttpClient) {
	}

	openNewsletter() {
		if (this.timer) window.clearTimeout(this.timer);
		if (!Cookie.get(`hideNewsletter-${environment.demo}`)) {
			this.timer = window.setTimeout(() => {
				this.modalService.dismissAll();
				(document.querySelector('.logo') as HTMLElement).focus({ preventScroll: true });

				setTimeout(() => {
					if (this.router.url === '/' && !document.querySelector('.newsletter-modal')) {
						this.modalService.open(
							NewsletterModalComponent,
							this.modalOption1
						)
					}
				}, 400);
			}, 5000);
		}
	}

	// Show login modal
	showLoginModal() {
		(document.querySelector('.logo') as HTMLElement).focus({ preventScroll: true });
		this.modalService.open(
			LoginModalComponent,
			this.modalOption2
		)
	}


	// Show Video modal
	showVideoModal() {
		this.modalService.open(
			VideoModalComponent,
			this.modalOption3
		)
	}

	/**
	 * Show Product in QuickView
	 */
	public showQuickView(product: Product) {
		(document.querySelector('.logo') as HTMLElement).focus({ preventScroll: true });

		const modalRef = this.modalService.open(
			QuickViewComponent,
			{
				...this.modalOption4,
				windowClass: 'quickView-modal'
			}
		);

		modalRef.componentInstance.slug = product.slug;
	}

	/**
	 * Show Product in QuickViewTwo
	 */
	public showQuickViewTwo(product: Product) {
		(document.querySelector('.logo') as HTMLElement).focus({ preventScroll: true });

		const modalRef = this.modalService.open(
			QuickViewTwoComponent,
			{
				...this.modalOption4,
				windowClass: 'quickView-modal'
			}
		);

		modalRef.componentInstance.slug = product.slug;
	}
}