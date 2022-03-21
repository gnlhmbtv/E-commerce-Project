import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { OwlModule } from 'angular-owl-carousel';

import { SharedModule } from '../../shared/shared.module';

import { TopCollectionComponent } from './top-collection/top-collection.component';
import { IndexComponent } from './index/index.component';
import { RecentCollectionComponent } from './recent-collection/recent-collection.component';
import { DealCollectionComponent } from './deal-collection/deal-collection.component';
import { BlogCollectionComponent } from './blog-collection/blog-collection.component';

@NgModule({
	declarations: [
		TopCollectionComponent,
		IndexComponent,
		RecentCollectionComponent,
		DealCollectionComponent,
		BlogCollectionComponent
	],

	imports: [
		CommonModule,
		RouterModule,
		NgbModule,
		OwlModule,
		SharedModule
	]
})

export class HomeModule { }
