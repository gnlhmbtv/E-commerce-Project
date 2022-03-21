import { Component, OnInit, Input } from '@angular/core';

import { environment } from 'src/environments/environment';

@Component({
	selector: 'blog-sidebar',
	templateUrl: './blog-sidebar.component.html',
	styleUrls: ['./blog-sidebar.component.scss']
})

export class BlogSidebarComponent implements OnInit {

	@Input() categories: any;
	@Input() toggle = false;
	@Input() single = false;

	SERVER_URL = environment.SERVER_URL;

	constructor() { }

	ngOnInit(): void {
	}
}
