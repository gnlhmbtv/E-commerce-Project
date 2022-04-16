import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-email-confirmation',
  templateUrl: './email-confirmation.component.html',
  styleUrls: ['./email-confirmation.component.css']
})
export class EmailConfirmationComponent implements OnInit {

  public showSuccess: boolean;
  public showError: boolean;
  public errorMessage: string;

  constructor(private accountService: AccountService, private router: ActivatedRoute,    private route:Router,
    private toastr: ToastrService,) {
  }

  ngOnInit(): void {
    this.confirmEmail();
  }

   confirmEmail = () => {
    this.showError = this.showSuccess = false;

    const token = this.router.snapshot.queryParams['token'];
    const email = this.router.snapshot.queryParams['email'];

    this.accountService.confirmEmail('api/email-confirmation',token, email).subscribe(() => {
        this.showSuccess = true;
        this.toastr.success('Account is created');
        this.route.navigate(['/account/login']);
      },
      error => {
         console.log(error);
         this.toastr.error(error)
      })
  }


}
