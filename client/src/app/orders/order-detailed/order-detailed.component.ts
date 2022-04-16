import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IOrder } from 'src/app/shared/models/order';
import { OrdersService } from '../orders.service';

@Component({
  selector: 'app-order-detailed',
  templateUrl: './order-detailed.component.html',
  styleUrls: ['./order-detailed.component.css']
})
export class OrderDetailedComponent implements OnInit {

  order: IOrder;

  // constructor(private route: ActivatedRoute, private orderService: OrdersService) 
  constructor(private route: ActivatedRoute, private orderService: OrdersService){}
  ngOnInit() {
    this.orderService.getOrderDetailed(+this.route.snapshot.paramMap.get('id'))
    .subscribe((order: IOrder) => {
      this.order = order;
    }, error => {
      console.log(error);
    })
  }

}
