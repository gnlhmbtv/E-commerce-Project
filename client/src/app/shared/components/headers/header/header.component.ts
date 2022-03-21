import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';

import { UtilsService } from 'src/app/shared/services/utils.service';
import { ModalService } from 'src/app/shared/services/modal.service';

@Component({
	selector: 'molla-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit, OnDestroy {

	@Input() containerClass = "container";

	private subscr: Subscription;

	constructor(public router: Router, public utilsService: UtilsService, public modalService: ModalService) {
		this.subscr = this.router.events.subscribe(event => {
			if (event instanceof NavigationStart) {
				if (event.url === '/') {
					document.querySelector('.header').classList.contains('position-relative') && document.querySelector('.header').classList.remove('position-relative');
				} else {
					document.querySelector('.header').classList.add('position-relative');
				}
			} else if (event instanceof NavigationEnd) {
				if (event.url === '/') {
					document.querySelector('.header').classList.contains('position-relative') && document.querySelector('.header').classList.remove('position-relative');
				} else {
					document.querySelector('.header').classList.add('position-relative');
				}
			}
		});
	}

	ngOnInit(): void {
	}

	ngOnDestroy(): void {
		this.subscr.unsubscribe();
	}

	showLoginModal(event: Event): void {
		event.preventDefault();
		this.modalService.showLoginModal();
	}
}
