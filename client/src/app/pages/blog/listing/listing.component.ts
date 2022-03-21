import { Component, OnInit, HostListener } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Post } from 'src/app/shared/classes/post';

import { ApiService } from 'src/app/shared/services/api.service';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Component({
	selector: 'blog-listing-page',
	templateUrl: './listing.component.html',
	styleUrls: ['./listing.component.scss']
})

export class ListingPageComponent implements OnInit {

	posts: Post[] = [];
	totalCount = 0;
	blogCategories = [];
	loaded = false;
	toggle = false;
	firstLoad = false;

	constructor(public activeRoute: ActivatedRoute, private apiService: ApiService, public utilsService: UtilsService) {
		this.activeRoute.queryParams.subscribe(param => {
			this.loaded = false;
			this.apiService.fetchBlogData(param, 'blogs/listing', 5).subscribe(result => {
				this.posts = result.blogs;
				this.blogCategories = result.categories;

				if (!this.firstLoad) {
					this.firstLoad = true;
				}

				this.totalCount = result.totalCount;
				this.loaded = true;

				this.utilsService.scrollToPageContent();
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
}