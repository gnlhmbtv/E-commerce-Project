import { Component, OnInit, HostListener } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Post } from 'src/app/shared/classes/post';

import { ApiService } from 'src/app/shared/services/api.service';
import { UtilsService } from 'src/app/shared/services/utils.service';
import { getPostsAmount, gridOption, itemsPerRowOption, pageTitles1 } from '../shared/data';

@Component({
	selector: 'blog-grid-page',
	templateUrl: './grid.component.html',
	styleUrls: ['./grid.component.scss']
})

export class GridPageComponent implements OnInit {

	posts: Post[] = [];
	totalCount = 0;
	blogCategories = [];
	counts = [];
	loaded = false;
	toggle = false;
	firstLoad = false;
	gridType: string = '';
	isotopeOptions = gridOption;
	itemsPerRow: number;
	itemsPerRowOption = itemsPerRowOption;
	pageDesc = pageTitles1;
	withSidebar = false;
	postsAmount: number;
	getPostsAmount = getPostsAmount;
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
	resizeHandler(event: Event) {
		this.resizeHandle()
	}

	getPosts() {
		this.postsAmount = getPostsAmount[this.gridType];
		this.itemsPerRow = itemsPerRowOption[this.gridType];
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
}