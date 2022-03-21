import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OwlModule } from 'angular-owl-carousel';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { NgbModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ElementsRoutingModule } from './elements-routing.module';
import { SharedModule } from '../../shared/shared.module';

import { AccordionsPageComponent } from './accordions/accordion.component';
import { BannersPageComponent } from './banners/banner.component';
import { BlogPostPageComponent } from './blog-post/blog-post.component';
import { ButtonsPageComponent } from './buttons/button.component';
import { CallToActionPageComponent } from './call-to-action/call-to-action.component';
import { IconBoxesPageComponent } from './icon-boxes/icon-box.component';
import { ProductPageComponent } from './product/product.component';
import { ProductCategoryPageComponent } from './product-category/product-category.component';
import { TabsPageComponent } from './tabs/tab.component';
import { TestimonialPageComponent } from './testimonials/testimonial.component';
import { TitlesPageComponent } from './titles/title.component';
import { TypographyPageComponent } from './typography/typography.component';
import { VideoBannerPageComponent } from './video-banner/video-banner.component';
import { ElementsListPageComponent } from './elements-list/elements-list.component';
import { ElementsListComponent } from './shared/elements-list/elements-list.component';

@NgModule( {
	declarations: [
		AccordionsPageComponent,
		BannersPageComponent,
		BlogPostPageComponent,
		ButtonsPageComponent,
		CallToActionPageComponent,
		IconBoxesPageComponent,
		ProductPageComponent,
		ProductCategoryPageComponent,
		TabsPageComponent,
		TestimonialPageComponent,
		TitlesPageComponent,
		TypographyPageComponent,
		VideoBannerPageComponent,
		ElementsListPageComponent,
		ElementsListComponent,
	],

	imports: [
		CommonModule,
		LazyLoadImageModule,
		ElementsRoutingModule,
		SharedModule,
		NgbModule,
		OwlModule
	],

	exports: [
		ElementsListComponent
	],

	providers: [
		NgbModal
	]
} )

export class ElementsModule { }
