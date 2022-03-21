import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SidebarPageComponent } from './sidebar/sidebar.component';
import { NosidebarPageComponent } from './nosidebar/nosidebar.component';
import { MarketPageComponent } from './market/market.component';
import { CartComponent } from './cart/cart.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductCategoryBoxedPageComponent } from './product-category-boxed/product-category-boxed.component';
import { ProductCategoryFluidPageComponent } from './product-category-fluid/product-category-fluid.component';

const routes: Routes = [
	{
		path: 'sidebar/:type',
		component: SidebarPageComponent
	},
	{
		path: 'sidebar',
		pathMatch: 'full',
		redirectTo: 'sidebar/list'
	},
	{
		path: '',
		pathMatch: 'full',
		redirectTo: 'sidebar/list'
	},
	{
		path: 'nosidebar/:type',
		component: NosidebarPageComponent
	},
	{
		path: 'nosidebar',
		pathMatch: 'full',
		redirectTo: 'nosidebar/boxed'
	},
	{
		path: 'market',
		component: MarketPageComponent
	},
	{
		path: 'cart',
		component: CartComponent
	},
	{
		path: 'wishlist',
		component: WishlistComponent
	},
	{
		path: 'checkout',
		component: CheckoutComponent
	},
	{
		path: 'dashboard',
		component: DashboardComponent
	},
	{
		path: 'category/boxed',
		component: ProductCategoryBoxedPageComponent
	},
	{
		path: 'category/fullwidth',
		component: ProductCategoryFluidPageComponent
	}
];

@NgModule( {
	imports: [ RouterModule.forChild( routes ) ],
	exports: [ RouterModule ]
} )



export class ShopRoutingModule { };