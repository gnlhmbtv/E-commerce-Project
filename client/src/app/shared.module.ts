import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { OwlModule } from 'angular-owl-carousel';
import { LazyLoadImageModule } from 'ng-lazyload-image';

// Header Element
import { CartMenuComponent } from './shared/components/headers/shared/cart-menu/cart-menu.component';
import { WishlistMenuComponent } from './shared/components/headers/shared/wishlist-menu/wishlist-menu.component';
import { MainMenuComponent } from './shared/components/headers/shared/main-menu/main-menu.component';
import { HeaderSearchComponent } from './shared/components/headers/shared/header-search/header-search.component';
import { MobileButtonComponent } from './shared/components/headers/shared/mobile-button/mobile-button.component';
import { MobileMenuComponent } from './shared/components/headers/shared/mobile-menu/mobile-menu.component';

// Header Component
import { HeaderComponent } from './shared/components/headers/header/header.component';

// // Product Component
import { ProductOneComponent } from './shared/components/product/product-one/product-one.component';
import { ProductTwoComponent } from './shared/components/product/product-two/product-two.component';
import { ProductThreeComponent } from './shared/components/product/product-three/product-three.component';
import { ProductFourComponent } from './shared/components/product/product-four/product-four.component';
import { ProductFiveComponent } from './shared/components/product/product-five/product-five.component';
import { ProductSixComponent } from './shared/components/product/product-six/product-six.component';
import { ProductSevenComponent } from './shared/components/product/product-seven/product-seven.component';
import { ProductEightComponent } from './shared/components/product/product-eight/product-eight.component';
import { ProductNineComponent } from './shared/components/product/product-nine/product-nine.component';
import { ProductTenComponent } from './shared/components/product/product-ten/product-ten.component';
import { ProductElevenComponent } from './shared/components/product/product-eleven/product-eleven.component';
import { ProductTwelveComponent } from './shared/components/product/product-twelve/product-twelve.component';
import { ProductThirteenComponent } from './shared/components/product/product-thirteen/product-thirteen.component';

// Footer Component
import { FooterComponent } from './shared/components/footer/footer.component';
// // Page Element
import { BreadcrumbComponent } from './shared/components/breadcrumb/breadcrumb.component';
import { PageHeaderComponent } from './shared/components/page-header/page-header.component';
import { PaginationComponent } from './shared/components/pagination/pagination.component';
import { CardComponent } from './shared/components/accordion/card/card.component';
import { AccordionComponent } from './shared/components/accordion/accordion.component';

// Product Element
import { QuantityInputComponent } from './shared/components/quantity-input/quantity-input.component';
import { CountDownComponent } from './shared/components/count-down/count-down.component';
import { CountToComponent } from './shared/components/count-to/count-to.component';

// // single use component
import { QuickViewComponent } from './shared/components/modals/quick-view/quick-view.component';
import { QuickViewTwoComponent } from './shared/components/modals/quick-view-two/quick-view-two.component';
import { VideoModalComponent } from './shared/components/modals/video-modal/video-modal.component';
import { NewsletterModalComponent } from './shared/components/modals/newsletter-modal/newsletter-modal.component';
import { LoginModalComponent } from './shared/components/modals/login-modal/login-modal.component';
import { IsotopeGridComponent } from './shared/components/isotope-grid/isotope-grid.component';
import { ImageComponent } from './shared/components/image/image.component';

// // Custom Directives
import { BgParallaxDirective } from './shared/directives/bg-parallax.directive';
import { TabClickDirective } from './shared/directives/custom-tab-click.directive';
import { ProductHoverDirective } from './shared/directives/product-hover.directive';
import { ContentAnimDirective } from './shared/directives/content-anim.directive';

// Pipes
import { CatFilterPipe } from './shared/pipes/cat-filter.pipe';
import { AttrFilterPipe } from './shared/pipes/attr-filter.pipe';
import { SafeContentPipe } from './shared/pipes/safe-content.pipe';

// // Post Component
import { PostOneComponent } from './shared/components/blog-post/post-one/post-one.component';
import { PostTwoComponent } from './shared/components/blog-post/post-two/post-two.component';
import { PostThreeComponent } from './shared/components/blog-post/post-three/post-three.component';
import { PostFourComponent } from './shared/components/blog-post/post-four/post-four.component';

@NgModule({
	declarations: [
		// header
		CartMenuComponent,
		WishlistMenuComponent,
		MainMenuComponent,
		HeaderSearchComponent,
		MobileButtonComponent,
		MobileMenuComponent,

		HeaderComponent,
		FooterComponent,

		// product
		ProductOneComponent,
		ProductTwoComponent,
		ProductThreeComponent,
		ProductFourComponent,
		ProductFiveComponent,
		ProductSixComponent,
		ProductSevenComponent,
		ProductEightComponent,
		ProductNineComponent,
		ProductTenComponent,
		ProductElevenComponent,
		ProductTwelveComponent,
		ProductThirteenComponent,

		// single-use components
		BreadcrumbComponent,
		PageHeaderComponent,
		QuickViewComponent,
		QuickViewTwoComponent,
		NewsletterModalComponent,
		LoginModalComponent,
		VideoModalComponent,
		QuantityInputComponent,
		CountDownComponent,
		AccordionComponent,
		CardComponent,
		PaginationComponent,
		IsotopeGridComponent,
		ImageComponent,

		// directives
		BgParallaxDirective,
		TabClickDirective,
		ProductHoverDirective,
		ContentAnimDirective,

		// pipes
		CatFilterPipe,
		AttrFilterPipe,
		SafeContentPipe,
		CountDownComponent,

		// // blog-post
		PostOneComponent,
		PostTwoComponent,
		PostThreeComponent,
		PostFourComponent,
		CountToComponent
	],

	imports: [
		CommonModule,
		RouterModule,
		NgbModule,
		TranslateModule,
		OwlModule,
		LazyLoadImageModule,
	],

	exports: [
		// header
		HeaderComponent,

		// mobile-menus
		MobileMenuComponent,

		// footer
		FooterComponent,

		// products
		ProductOneComponent,
		ProductTwoComponent,
		ProductThreeComponent,
		ProductFourComponent,
		ProductFiveComponent,
		ProductSixComponent,
		ProductSevenComponent,
		ProductEightComponent,
		ProductNineComponent,
		ProductTenComponent,
		ProductElevenComponent,
		ProductTwelveComponent,
		ProductThirteenComponent,

		// // single-use components
		BreadcrumbComponent,
		PageHeaderComponent,
		CountDownComponent,
		CountToComponent,
		AccordionComponent,
		CardComponent,
		PaginationComponent,
		QuantityInputComponent,
		IsotopeGridComponent,
		ImageComponent,

		// directives
		BgParallaxDirective,
		TabClickDirective,
		ProductHoverDirective,
		ContentAnimDirective,

		// pipes
		CatFilterPipe,
		AttrFilterPipe,
		SafeContentPipe,

		// // blog-post
		PostOneComponent,
		PostTwoComponent,
		PostThreeComponent,
		PostFourComponent,
	],

	entryComponents: [
		VideoModalComponent,
		QuickViewComponent,
		QuickViewTwoComponent,
		NewsletterModalComponent,
		LoginModalComponent
	]
})

export class SharedModule { }