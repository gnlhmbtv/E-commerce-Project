import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SwiperModule } from 'swiper/angular';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    SwiperModule
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
