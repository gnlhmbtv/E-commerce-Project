import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IDeliveryMethod } from 'src/app/shared/models/deliveryMethod';
import { CheckoutService } from '../checkout.service';

@Component({
  selector: 'app-checkout-delivery',
  templateUrl: './checkout-delivery.component.html',
  styleUrls: ['./checkout-delivery.component.css']
})
export class CheckoutDeliveryComponent implements OnInit {
  @Input() checkoutForm: FormGroup;
  deliveryMethods: IDeliveryMethod[];

  constructor(private checkoutService: CheckoutService) { }

  ngOnInit() {
    this.checkoutService.getDeliveryMethods().subscribe((dm: IDeliveryMethod[]) => {
      this.deliveryMethods = dm;
    },error => {
      console.log(error);
    });
  }

}
