import { Component, Input, OnInit } from '@angular/core';
import { CdkStepper } from '@angular/cdk/stepper';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { BasketService } from 'src/app/basket/basket.service';
import { IBasket } from 'src/app/shared/models/basket';

@Component({
  selector: 'app-checkout-review',
  templateUrl: './checkout-review.component.html',
  styleUrls: ['./checkout-review.component.css']
})
export class CheckoutReviewComponent implements OnInit {

  @Input() appStepper: CdkStepper;
  basket$: Observable<IBasket>;
  constructor(private basketService: BasketService, private toastr: ToastrService) { }
  ngOnInit(): void {
    this.basket$ = this.basketService.basket$;
  }

  createPaymentIntent() {
    return this.basketService.createPaymentIntent().subscribe((response: any) => {
      this.appStepper.next();
    }, error => {
      console.log(error);
    })
  }


}
