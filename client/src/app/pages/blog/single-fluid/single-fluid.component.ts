import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Post } from 'src/app/shared/classes/post';

import { ApiService } from 'src/app/shared/services/api.service';
import { UtilsService } from 'src/app/shared/services/utils.service';
import { ModalService } from 'src/app/shared/services/modal.service';

import { postSlider1 } from '../shared/data';
import { sliderOpt } from 'src/app/shared/data';

import { environment } from 'src/environments/environment';

@Component( {
	selector: 'blog-single-fluid-page',
	templateUrl: './single-fluid.component.html',
	styleUrls: [ './single-fluid.component.scss' ]
} )

export class SingleFluidPageComponent implements OnInit {

	post: Post;
	prevPost: Post;
	nextPost: Post;
	loaded = false;
	relatedPosts = [];
	sliderOption1 = postSlider1;
	sliderOption2 = { ...sliderOpt, loop: false };
	SERVER_URL = environment.SERVER_URL;
	paddingTop = '100%';

	constructor ( public activeRoute: ActivatedRoute, private apiService: ApiService, public utilsService: UtilsService, private modalService: ModalService ) {
		this.activeRoute.params.subscribe( params => {
			this.loaded = false;

			this.apiService.fetchSinglePost( params[ 'slug' ] ).subscribe( result => {
				this.post = result.blog;
				this.relatedPosts = result.relatedBlogs;
				this.prevPost = result.prevBlog;
				this.nextPost = result.nextBlog;
				this.paddingTop = Math.floor( ( parseFloat( this.post.image[ 0 ].height.toString() ) / parseFloat( this.post.image[ 0 ].width.toString() ) * 1000 ) ) / 10 + '%';

				this.loaded = true;
			} );
		} );
	}

	ngOnInit (): void {

	}

	trackByFn ( index: number, item: any ) {
		if ( !item ) return null;
		return item.slug;
	}

	showModal ( event: Event ) {
		event.preventDefault();
		this.modalService.showVideoModal();
	}
}
