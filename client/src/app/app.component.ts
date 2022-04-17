import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AccountService } from './account/account.service';
import { BasketService } from './basket/basket.service';
import * as $ from 'jquery';
declare const myFun: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'client';

  constructor(private basketService: BasketService, private accountService: AccountService) { }


  ngOnInit(): void {
    $(document).ready(function(){
      $.getScript('./src/assets/js/feather/feather.min.js');
      $.getScript('./src/assets/js/jquery-3.5.1.min.js');
      $.getScript('./src/assets/js/jquery.elevatezoom.js');
      $.getScript('./src/assets/js/jquery.magnific-popup.min.js');
      $.getScript('./src/assets/js/bootstrap/bootstrap.bundle.min.js');
      $.getScript('./src/assets/js/pwa.js');
      $.getScript('./src/assets/js/lazysizes.min.js');
      $.getScript('./src/assets/js/slick/slick.js');
      $.getScript('./src/assets/js/slick/slick-animation.min.js');
      $.getScript('./src/assets/js/slick/custom_slick.js');
      $.getScript('./src/assets/js/bootstrap/bootstrap-notify.min.js');
      $.getScript('./src/assets/js/add-remove.js');
      $.getScript('./src/assets/js/price-filter.js');
      $.getScript('./src/assets/js/ion.rangeSlider.min.js');
      $.getScript('./src/assets/js/filter.js');
      $.getScript('./src/assets/js/bootstrap/bootstrap-notify.min.js');
      $.getScript('./src/assets/js/theme-setting.js');
      $.getScript('./src/assets/myjs/info.js');
    })
    
   this.loadBasket();
   this.loadCurrentUser();

  }

  loadCurrentUser(){
    const token = localStorage.getItem('token');

      this.accountService.loadCurrentUser(token).subscribe(() => {
        console.log('loaded user');
      }, error => {
        console.log(error);
      });
    
  }

  

  loadBasket(){
    const basketId = localStorage.getItem('basket_id');
    if(basketId){
      this.basketService.getBasket(basketId).subscribe(() => {        
      }, error => {
        console.log(error);
      });
    }
  }
}
