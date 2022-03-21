import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LightboxModule } from 'ngx-lightbox';
import { OwlModule } from 'angular-owl-carousel';

import { ProductRoutingModule } from './product-routing.module';
import { SharedModule } from '../../shared/shared.module';

import { DefaultPageComponent } from './default/default.component';
import { CenteredPageComponent } from './centered/centered.component';
import { ExtendedPageComponent } from './extended/extended.component';
import { GalleryPageComponent } from './gallery/gallery.component';
import { StickyInfoPageComponent } from './sticky-info/sticky-info.component';
import { SidebarPageComponent } from './sidebar/sidebar.component';
import { FullWidthPageComponent } from './fullwidth/fullwidth.component';
import { MasonryPageComponent } from './masonry/masonry.component';

import { GalleryDefaultComponent } from './shared/gallery/gallery-default/gallery-default.component';
import { GalleryStickyComponent } from './shared/gallery/gallery-sticky/gallery-sticky.component';
import { GalleryExtendComponent } from './shared/gallery/gallery-extend/gallery-extend.component';
import { GalleryMasonryComponent } from './shared/gallery/gallery-masonry/gallery-masonry.component';

import { DetailOneComponent } from './shared/details/detail-one/detail-one.component';
import { DetailTwoComponent } from './shared/details/detail-two/detail-two.component';
import { DetailThreeComponent } from './shared/details/detail-three/detail-three.component';

import { InfoOneComponent } from './shared/info-tabs/info-one/info-one.component';
import { InfoTwoComponent } from './shared/info-tabs/info-two/info-two.component';
import { InfoThreeComponent } from './shared/info-tabs/info-three/info-three.component';

import { RelatedProductsOneComponent } from './shared/related-products/related-products-one/related-products-one.component';
import { RelatedProductsTwoComponent } from './shared/related-products/related-products-two/related-products-two.component';
import { ToggleSidebarComponent } from './shared/toggle-sidebar/toggle-sidebar.component';

@NgModule({
	declarations: [
		DefaultPageComponent,
		CenteredPageComponent,
		ExtendedPageComponent,
		GalleryPageComponent,
		StickyInfoPageComponent,
		SidebarPageComponent,
		FullWidthPageComponent,
		MasonryPageComponent,

		GalleryDefaultComponent,
		GalleryExtendComponent,
		GalleryStickyComponent,
		GalleryMasonryComponent,

		DetailOneComponent,
		DetailTwoComponent,
		DetailThreeComponent,

		InfoOneComponent,
		InfoTwoComponent,
		InfoThreeComponent,

		RelatedProductsOneComponent,
		RelatedProductsTwoComponent,
		ToggleSidebarComponent,
	],

	imports: [
		CommonModule,
		ProductRoutingModule,
		SharedModule,
		RouterModule,
		NgbModule,
		OwlModule,
		LightboxModule,
	],

	exports: [],

	providers: [
		NgbModal
	]
})

export class ProductModule { }
