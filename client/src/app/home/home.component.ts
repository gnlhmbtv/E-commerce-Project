import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  <swiper
    [slidesPerView]="3"
    [spaceBetween]="50"
    (swiper)="onSwiper($event)"
    (slideChange)="onSlideChange()"
  >
    <ng-template swiperSlide>Slide 1</ng-template>
    <ng-template swiperSlide>Slide 2</ng-template>
    <ng-template swiperSlide>Slide 3</ng-template>
  </swiper>
`,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  
  constructor() { }

  ngOnInit(): void {
  }

}
