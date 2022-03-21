import { Component, OnInit, Input } from '@angular/core';

import { Post } from 'src/app/shared/classes/post';

import { ModalService } from 'src/app/shared/services/modal.service';

import { sliderOpt } from 'src/app/shared/data';
import { environment } from 'src/environments/environment';

@Component({
	selector: 'molla-post-four',
	templateUrl: './post-four.component.html',
	styleUrls: ['./post-four.component.scss']
})

export class PostFourComponent implements OnInit {

	@Input() post: Post;

	sliderOption = { ...sliderOpt, loop: false };
	SERVER_URL = environment.SERVER_URL;
	paddingTop = '100%';

	constructor(private modalService: ModalService) { }

	ngOnInit(): void {
		this.paddingTop = Math.floor((parseFloat(this.post.image[0].height.toString()) / parseFloat(this.post.image[0].width.toString()) * 1000)) / 10 + '%';
	}

	showModal(event: Event) {
		event.preventDefault();
		this.modalService.showVideoModal();
	}
}
