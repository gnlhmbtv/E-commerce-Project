import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutOneComponent } from './about-one/about-one.component';
import { AboutTwoPageComponent } from './about-two/about-two.component';
import { LoginPageComponent } from './login/login.component';
import { FaqsPageComponent } from './faqs/faqs.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ContactOnePageComponent } from './contact-one/contact-one.component';
import { ContactTwoPageComponent } from './contact-two/contact-two.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'about',
        pathMatch: 'full'
    },
    {
        path: 'about',
        component: AboutOneComponent
    },
    {
        path: 'about-2',
        component: AboutTwoPageComponent
    },
    {
        path: '404',
        component: PageNotFoundComponent
    },
    {
        path: 'login',
        component: LoginPageComponent
    },
    {
        path: 'faq',
        component: FaqsPageComponent
    },
    {
        path: 'contact',
        component: ContactOnePageComponent
    },
    {
        path: 'contact-2',
        component: ContactTwoPageComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class PagesRoutingModule { };