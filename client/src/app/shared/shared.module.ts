import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { OwlModule } from 'angular-owl-carousel';
import { LazyLoadImageModule } from 'ng-lazyload-image';

// Header Element
import { CartMenuComponent } from './components/headers/shared/cart-menu/cart-menu.component';
import { WishlistMenuComponent } from './components/headers/shared/wishlist-menu/wishlist-menu.component';
import { MainMenuComponent } from './components/headers/shared/main-menu/main-menu.component';
import { HeaderSearchComponent } from './components/headers/shared/header-search/header-search.component';
import { MobileButtonComponent } from './components/headers/shared/mobile-button/mobile-button.component';
import { MobileMenuComponent } from './components/headers/shared/mobile-menu/mobile-menu.component';

// Header Component
import { HeaderComponent } from './components/headers/header/header.component';

// // Product Component
import { ProductOneComponent } from './components/product/product-one/product-one.component';
import { ProductTwoComponent } from './components/product/product-two/product-two.component';
import { ProductThreeComponent } from './components/product/product-three/product-three.component';
import { ProductFourComponent } from './components/product/product-four/product-four.component';
import { ProductFiveComponent } from './components/product/product-five/product-five.component';
import { ProductSixComponent } from './components/product/product-six/product-six.component';
import { ProductSevenComponent } from './components/product/product-seven/product-seven.component';
import { ProductEightComponent } from './components/product/product-eight/product-eight.component';
import { ProductNineComponent } from './components/product/product-nine/product-nine.component';
import { ProductTenComponent } from './components/product/product-ten/product-ten.component';
import { ProductElevenComponent } from './components/product/product-eleven/product-eleven.component';
import { ProductTwelveComponent } from './components/product/product-twelve/product-twelve.component';
import { ProductThirteenComponent } from './components/product/product-thirteen/product-thirteen.component';

// Footer Component
import { FooterComponent } from './components/footer/footer.component';
// // Page Element
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { CardComponent } from './components/accordion/card/card.component';
import { AccordionComponent } from './components/accordion/accordion.component';

// Product Element
import { QuantityInputComponent } from './components/quantity-input/quantity-input.component';
import { CountDownComponent } from './components/count-down/count-down.component';
import { CountToComponent } from './components/count-to/count-to.component';

// // single use component
import { QuickViewComponent } from './components/modals/quick-view/quick-view.component';
import { QuickViewTwoComponent } from './components/modals/quick-view-two/quick-view-two.component';
import { VideoModalComponent } from './components/modals/video-modal/video-modal.component';
import { NewsletterModalComponent } from './components/modals/newsletter-modal/newsletter-modal.component';
import { LoginModalComponent } from './components/modals/login-modal/login-modal.component';
import { IsotopeGridComponent } from './components/isotope-grid/isotope-grid.component';
import { ImageComponent } from './components/image/image.component';

// // Custom Directives
import { BgParallaxDirective } from './directives/bg-parallax.directive';
import { TabClickDirective } from './directives/custom-tab-click.directive';
import { ProductHoverDirective } from './directives/product-hover.directive';
import { ContentAnimDirective } from './directives/content-anim.directive';

// Pipes
import { CatFilterPipe } from './pipes/cat-filter.pipe';
import { AttrFilterPipe } from './pipes/attr-filter.pipe';
import { SafeContentPipe } from './pipes/safe-content.pipe';

// // Post Component
import { PostOneComponent } from './components/blog-post/post-one/post-one.component';
import { PostTwoComponent } from './components/blog-post/post-two/post-two.component';
import { PostThreeComponent } from './components/blog-post/post-three/post-three.component';
import { PostFourComponent } from './components/blog-post/post-four/post-four.component';

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