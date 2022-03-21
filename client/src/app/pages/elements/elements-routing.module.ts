import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ElementsListComponent } from './shared/elements-list/elements-list.component';
import { TitlesPageComponent } from './titles/title.component';
import { ProductPageComponent } from './product/product.component';
import { TypographyPageComponent } from './typography/typography.component';
import { BannersPageComponent } from './banners/banner.component';
import { ProductCategoryPageComponent } from './product-category/product-category.component';
import { VideoBannerPageComponent } from './video-banner/video-banner.component';
import { ButtonsPageComponent } from './buttons/button.component';
import { AccordionsPageComponent } from './accordions/accordion.component';
import { TabsPageComponent } from './tabs/tab.component';
import { TestimonialPageComponent } from './testimonials/testimonial.component';
import { BlogPostPageComponent } from './blog-post/blog-post.component';
import { CallToActionPageComponent } from './call-to-action/call-to-action.component';
import { IconBoxesPageComponent } from './icon-boxes/icon-box.component';
import { ElementsListPageComponent } from './elements-list/elements-list.component';

const routes: Routes = [
    {
        path: '',
        component: ElementsListComponent,
        children: [
            {
                path: 'titles',
                component: TitlesPageComponent
            },
            {
                path: 'products',
                component: ProductPageComponent
            },
            {
                path: 'typography',
                component: TypographyPageComponent
            },
            {
                path: 'banners',
                component: BannersPageComponent
            },
            {
                path: 'categories',
                component: ProductCategoryPageComponent
            },
            {
                path: 'video-banners',
                component: VideoBannerPageComponent
            },
            {
                path: 'buttons',
                component: ButtonsPageComponent
            },
            {
                path: 'accordions',
                component: AccordionsPageComponent
            },
            {
                path: 'tabs',
                component: TabsPageComponent
            },
            {
                path: 'testimonials',
                component: TestimonialPageComponent
            },
            {
                path: 'blog-posts',
                component: BlogPostPageComponent
            },
            {
                path: 'cta',
                component: CallToActionPageComponent
            },
            {
                path: 'icon-boxes',
                component: IconBoxesPageComponent
            },
            {
                path: '',
                component: ElementsListPageComponent
            }
        ]
    }
];

@NgModule( {
    imports: [ RouterModule.forChild( routes ) ],
    exports: [ RouterModule ]
} )

export class ElementsRoutingModule { };