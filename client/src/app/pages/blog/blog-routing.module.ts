import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ClassicPageComponent } from './classic/classic.component';
import { ListingPageComponent } from './listing/listing.component';
import { MaskGridPageComponent } from './mask-grid/mask-grid.component';
import { MaskMasonryPageComponent } from './mask-masonry/mask-masonry.component';
import { MasonryPageComponent } from './masonry/masonry.component';
import { GridPageComponent } from './grid/grid.component';
import { SingleDefaultPageComponent } from './single-default/single-default.component';
import { SingleFluidPageComponent } from './single-fluid/single-fluid.component';
import { SingleSidebarPageComponent } from './single-sidebar/single-sidebar.component';

const routes: Routes = [
	{
		path: '',
		redirectTo: 'classic',
		pathMatch: 'full'
	},
	{
		path: 'classic',
		component: ClassicPageComponent
	},
	{
		path: 'listing',
		component: ListingPageComponent
	},
	{
		path: 'mask/grid',
		component: MaskGridPageComponent
	},
	{
		path: 'mask/masonry',
		component: MaskMasonryPageComponent
	},
	{
		path: 'masonry/:type',
		component: MasonryPageComponent
	},
	{
		path: 'grid/:type',
		component: GridPageComponent
	},
	{
		path: 'single/default/:slug',
		component: SingleDefaultPageComponent
	},
	{
		path: 'single/fullwidth/:slug',
		component: SingleFluidPageComponent
	},
	{
		path: 'single/sidebar/:slug',
		component: SingleSidebarPageComponent
	}
]

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})

export class BlogRoutingModule { };