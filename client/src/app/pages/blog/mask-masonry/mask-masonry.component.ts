import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Post } from 'src/app/shared/classes/post';

import { ApiService } from 'src/app/shared/services/api.service';
import { UtilsService } from 'src/app/shared/services/utils.service';
import { masonryOption } from '../shared/data';

@Component({
	selector: 'blog-mask-masonry-page',
	templateUrl: './mask-masonry.component.html',
	styleUrls: ['./mask-masonry.component.scss']
})

export class MaskMasonryPageComponent implements OnInit {

	posts: Post[] = [];
	totalCount = 0;
	blogCategories = [];
	counts = [];
	loaded = false;
	isotopeOptions = masonryOption;

	constructor(public activeRoute: ActivatedRoute, private apiService: ApiService, public utilsService: UtilsService) {
		this.activeRoute.params.subscribe(param => {
			this.loaded = false;

			this.apiService.fetchBlogData(param, 'blogs/mask-masonry', 9).subscribe(result => {
				this.posts = result.blogs;
				this.blogCategories = result.categories;

				this.counts = [];
				this.counts.push(this.posts.length);

				this.blogCategories.map((item, index) => {
					this.counts.push(item.count);
				});

				this.totalCount = result.totalCount;
				this.loaded = true;

				this.utilsService.scrollToPageContent();
			});
		});
	}

	ngOnInit(): void {
	}

	trackByFn(index: number, item: any) {
		if (!item) return null;
		return item.slug;
	}
}