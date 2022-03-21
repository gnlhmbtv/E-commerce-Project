import { Component, OnInit, Input, ViewChild } from '@angular/core';

import { Post } from 'src/app/shared/classes/post';

import { IsotopeGridComponent } from 'src/app/shared/components/isotope-grid/isotope-grid.component';

@Component({
	selector: 'blog-entry-isotope',
	templateUrl: './blog-entry-isotope.component.html',
	styleUrls: ['./blog-entry-isotope.component.scss']
})

export class BlogEntryIsotopeComponent implements OnInit {

	@Input() posts: Post[] = [];
	@Input() counts: number[];
	@Input() gridOptions;
	@Input() itemsPerRow: number;
	@Input() justifyClass: string;
	@Input() postType: number;
	@Input() isContent = true;
	@Input() showNav: boolean;
	@ViewChild('blogIsotope') blogIsotope: IsotopeGridComponent;

	filters = ['*', '.Lifestyle', '.Shopping', '.Travel', '.Hobbies', '.Fashion'];
	navText = ['All Blog Posts', 'Lifestyle', 'Shopping', 'Travel', 'Hobbies', 'Fashion'];
	displayPosts: Post[];
	isFirst = true;
	maxCount: number;
	paginationCount: number;
	start = 0;

	constructor() {
	}

	ngOnChanges(): void {
		if (!this.posts) return;

		this.displayPosts = this.posts;
		this.paginationCount = this.counts[0];

		if (this.itemsPerRow !== 4) {
			this.maxCount = this.itemsPerRow * 3;
		} else {
			this.maxCount = this.itemsPerRow * 2;
		}

		if (!this.showNav) {
			this.maxCount = 8;
		}

		if (!this.isFirst) {
			this.blogIsotope.isReset = true;
		} else {
			this.isFirst = false;
		}
	}

	ngOnInit(): void {
	}

	onChangePage(current: number) {
		// display loading overlay

		this.start = current;
		this.blogIsotope.isReset = true;

		window.scrollTo({
			top: 0
		});
	}

	getPostCategory(post) {
		return post.blog_categories.reduce((acc, cur) => {
			return acc + " " + cur.slug;
		}, "");
	}

	filterBlogs(e) {
		let filter = e.target.getAttribute('data-filter');

		this.blogIsotope.isReset = true;

		if (filter && filter !== "*") {
			filter = filter.substring(1);
		}

		if (filter !== "*") {
			this.displayPosts = this.posts.filter(post =>
				post.blog_categories.find(cat => cat.slug == filter.toLowerCase())
			);
		} else {
			this.displayPosts = this.posts;
		}

		this.paginationCount = this.displayPosts.length;
		this.start = 0;
	}
}
