import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OwlModule } from 'angular-owl-carousel';

import { SharedModule } from '../../shared/shared.module';
import { BlogRoutingModule } from './blog-routing.module';

// pages
import { ClassicPageComponent } from './classic/classic.component';
import { ListingPageComponent } from './listing/listing.component';
import { GridPageComponent } from './grid/grid.component';
import { MasonryPageComponent } from './masonry/masonry.component';
import { MaskGridPageComponent } from './mask-grid/mask-grid.component';
import { MaskMasonryPageComponent } from './mask-masonry/mask-masonry.component';
import { SingleDefaultPageComponent } from './single-default/single-default.component';
import { SingleFluidPageComponent } from './single-fluid/single-fluid.component';
import { SingleSidebarPageComponent } from './single-sidebar/single-sidebar.component';

// single component
import { BlogSidebarComponent } from './shared/blog-sidebar/blog-sidebar.component';
import { BlogEntryIsotopeComponent } from './shared/blog-entry-isotope/blog-entry-isotope.component';
import { RelatedPostsComponent } from './shared/related-posts/related-posts.component';

@NgModule({
	declarations: [
		ClassicPageComponent,
		ListingPageComponent,
		GridPageComponent,
		MasonryPageComponent,
		MaskGridPageComponent,
		MaskMasonryPageComponent,
		SingleDefaultPageComponent,
		SingleFluidPageComponent,
		SingleSidebarPageComponent,
		BlogSidebarComponent,
		BlogEntryIsotopeComponent,
		RelatedPostsComponent
	],
	imports: [
		CommonModule,
		SharedModule,
		BlogRoutingModule,
		OwlModule
	]
})

export class BlogModule { }
