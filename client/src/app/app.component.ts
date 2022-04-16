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
