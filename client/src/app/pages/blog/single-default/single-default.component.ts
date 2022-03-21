import { Component, OnInit, HostListener } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Post } from 'src/app/shared/classes/post';

import { ApiService } from 'src/app/shared/services/api.service';
import { UtilsService } from 'src/app/shared/services/utils.service';
import { ModalService } from 'src/app/shared/services/modal.service';

import { postSlider1 } from '../shared/data';
import { sliderOpt } from 'src/app/shared/data';

import { environment } from 'src/environments/environment';

@Component({
	selector: 'blog-single-default-page',
	templateUrl: './single-default.component.html',
	styleUrls: ['./single-default.component.scss']
})

export class SingleDefaultPageComponent implements OnInit {

	post: Post;
	prevPost: Post;
	nextPost: Post;
	loaded = false;
	firstLoad = false;
	toggle = false;
	relatedPosts = [];
	sliderOption1 = postSlider1;
	sliderOption2 = { ...sliderOpt, loop: false };
	blogCategories = [];
	SERVER_URL = environment.SERVER_URL;
	paddingTop = '100%';

	constructor(public activeRoute: ActivatedRoute, private apiService: ApiService, public utilsService: UtilsService, private modalService: ModalService) {
		this.activeRoute.params.subscribe(params => {
			this.loaded = false;

			this.apiService.fetchSinglePost(params['slug']).subscribe(result => {
				this.post = result.blog;
				this.blogCategories = result.categories;
				this.relatedPosts = result.relatedBlogs;
				this.prevPost = result.prevBlog;
				this.nextPost = result.nextBlog;
				this.paddingTop = Math.floor((parseFloat(this.post.image[0].height.toString()) / parseFloat(this.post.image[0].width.toString()) * 1000)) / 10 + '%';

				if (!this.firstLoad) {
					this.firstLoad = true;
				}

				this.loaded = true;
			});
		});
	}

	ngOnInit(): void {
		this.resizeHandle();
	}

	@HostListener('window:resize', ['$event'])
	resizeHandler(event: Event) {
		this.resizeHandle()
	}

	trackByFn(index: number, item: any) {
		if (!item) return null;
		return item.slug;
	}

	resizeHandle() {
		if (window.innerWidth < 992)
			this.toggle = true;
		else
			this.toggle = false;
	}

	toggleSidebar() {
		if (
			document.querySelector('body')?.classList.contains('sidebar-filter-active')
		) {
			document.querySelector('body')?.classList.remove('sidebar-filter-active');
		} else {
			document.querySelector('body')?.classList.add('sidebar-filter-active');
		}
	}

	hideSidebar() {
		document
			.querySelector('body')
			.classList.remove('sidebar-filter-active');
	}

	showModal(event: Event) {
		event.preventDefault();
		this.modalService.showVideoModal();
	}
}
