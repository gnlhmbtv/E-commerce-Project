import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { ApiService } from 'src/app/shared/services/api.service';

@Component({
	selector: 'element-blog-post-page',
	templateUrl: './blog-post.component.html',
	styleUrls: ['./blog-post.component.scss']
})

export class BlogPostPageComponent implements OnInit, OnDestroy {

	posts = [];
	loaded = false;

	private subscr: Subscription;

	constructor(private apiService: ApiService) { }

	ngOnInit(): void {
		this.subscr = this.apiService.fetchElementBlog().subscribe(items => {
			this.posts = items;
			this.loaded = true;
		});
	}

	ngOnDestroy(): void {
		this.subscr.unsubscribe();
	}
}