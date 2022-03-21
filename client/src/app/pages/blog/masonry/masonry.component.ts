import { Component, OnInit, HostListener } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Post } from 'src/app/shared/classes/post';

import { ApiService } from 'src/app/shared/services/api.service';
import { UtilsService } from 'src/app/shared/services/utils.service';
import { getPostsAmount1, masonryOption, itemsPerRowOption1, pageTitles2 } from '../shared/data';

@Component({
	selector: 'blog-masonry-page',
	templateUrl: './masonry.component.html',
	styleUrls: ['./masonry.component.scss']
})

export class MasonryPageComponent implements OnInit {

	posts: Post[] = [];
	totalCount = 0;
	blogCategories = [];
	counts: number[] = [];
	loaded = false;
	toggle = false;
	firstLoad = false;
	gridType: string = '';
	isotopeOptions = masonryOption;
	itemsPerRow: number;
	itemsPerRowOption1 = itemsPerRowOption1;
	pageDesc = pageTitles2;
	withSidebar = false;
	postsAmount: number;
	getPostsAmount1 = getPostsAmount1;
	params = {};

	constructor(public activeRoute: ActivatedRoute, private apiService: ApiService, public utilsService: UtilsService) {
		this.activeRoute.params.subscribe(param => {
			this.gridType = param['type'];
			if (this.gridType.includes('sidebar')) {
				this.withSidebar = true;
			} else {
				this.withSidebar = false;
			}

			this.params = {};
			this.activeRoute.queryParams.subscribe(params => {
				this.params = params;
				this.getPosts();
			})
		});
	}

	ngOnInit(): void {
		this.resizeHandle();
	}

	@HostListener('window:resize', ['$event'])
	handleKeyDown(event: Event) {
		this.resizeHandle()
	}

	getPosts() {
		this.itemsPerRow = itemsPerRowOption1[this.gridType];
		this.postsAmount = getPostsAmount1[this.gridType];
		this.loaded = false;

		this.apiService.fetchBlogData(this.params, 'blogs/' + this.gridType, this.postsAmount).subscribe(result => {
			this.posts = result.blogs;
			this.blogCategories = result.categories;

			this.counts = [];
			this.counts.push(this.posts.length);

			this.blogCategories.map((item, index) => {
				this.counts.push(item.count);
			});

			if (!this.firstLoad) {
				this.firstLoad = true;
			}

			this.totalCount = result.totalCount;
			this.loaded = true;

			this.utilsService.scrollToPageContent();
		});
	}

	public trackByFn(index: number, item: any) {
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
			document
				.querySelector('body')
				.classList.contains('sidebar-filter-active')
		) {
			document
				.querySelector('body')
				.classList.remove('sidebar-filter-active');
		} else {
			document
				.querySelector('body')
				.classList.add('sidebar-filter-active');
		}
	}

	hideSidebar() {
		document
			.querySelector('body')
			.classList.remove('sidebar-filter-active');
	}
}