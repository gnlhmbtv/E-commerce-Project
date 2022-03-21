import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DefaultPageComponent } from './default/default.component';
import { CenteredPageComponent } from './centered/centered.component';
import { ExtendedPageComponent } from './extended/extended.component';
import { FullWidthPageComponent } from './fullwidth/fullwidth.component';
import { GalleryPageComponent } from './gallery/gallery.component';
import { MasonryPageComponent } from './masonry/masonry.component';
import { SidebarPageComponent } from './sidebar/sidebar.component';
import { StickyInfoPageComponent } from './sticky-info/sticky-info.component';

const routes: Routes = [
    {
        path: 'default/:slug',
        component: DefaultPageComponent
    },
    {
        path: 'centered/:slug',
        component: CenteredPageComponent
    },
    {
        path: 'extended/:slug',
        component: ExtendedPageComponent
    },
    {
        path: 'fullwidth/:slug',
        component: FullWidthPageComponent
    },
    {
        path: 'gallery/:slug',
        component: GalleryPageComponent
    },
    {
        path: 'masonry/:slug',
        component: MasonryPageComponent
    },
    {
        path: 'sidebar/:slug',
        component: SidebarPageComponent
    },
    {
        path: 'sticky/:slug',
        component: StickyInfoPageComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ProductRoutingModule { };