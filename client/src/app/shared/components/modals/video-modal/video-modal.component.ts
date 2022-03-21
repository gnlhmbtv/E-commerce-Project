import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component( {
	selector: 'molla-video-modal',
	templateUrl: './video-modal.component.html',
	styleUrls: [ './video-modal.component.scss' ]
} )

export class VideoModalComponent implements OnInit {

	constructor ( private modalService: NgbActiveModal ) {
	}

	ngOnInit (): void {
	}

	closeModal () {
		this.modalService.dismiss();
	}
}