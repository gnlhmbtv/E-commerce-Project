import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AccountService } from '../account/account.service';
import { ForgotPassword } from '../shared/models/forgot-password';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  public forgotPasswordForm: FormGroup;
  public successMessage: string;
  public errorMessage: string;
  public showSuccess: boolean;
  public showError: boolean;

  constructor(private accountService: AccountService) {
  }

  ngOnInit(): void {
    this.forgotPasswordForm = new FormGroup({
      email: new FormControl("", [Validators.required])
    })
  }

   validateControl = (controlName: string) => {
    return this.forgotPasswordForm.controls[controlName].invalid &&
      this.forgotPasswordForm.controls[controlName].touched;
  }

   hasError = (controlName: string, errorName: string) => {
    return this.forgotPasswordForm.controls[controlName].hasError(errorName);
  }

   forgotPassword = (forgotPasswordFormValue: any) => {
    this.showError = this.showSuccess = false;

    const forgotPass = {...forgotPasswordFormValue};
    const forgotPassDto: ForgotPassword = {
      email: forgotPass.email,
      clientUri: 'https://localhost:4200/resetpassword'
    }

    this.accountService.forgotPassword('api/account/ForgotPassword', forgotPassDto)
      .subscribe(() => {
          this.showSuccess = true;
          this.successMessage = 'The link has been sent, please check your email to reset your password.'
        },
        error => {
          this.showError = true;
          this.errorMessage = error;
        })
  }


}
