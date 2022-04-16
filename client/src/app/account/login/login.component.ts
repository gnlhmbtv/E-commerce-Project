import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  returnUrl: string;
  fbAccessToken: string | null = null;
  fbLoading = false;


  constructor(
    private accountService: AccountService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.returnUrl = this.activatedRoute.snapshot.queryParams.returnUrl || '/shop';
    this.createLoginForm();
  }

  createLoginForm() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.pattern('^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$'),
      ]),
      password: new FormControl('', Validators.required),
    });
  }

  onSubmit() {
    this.accountService.login(this.loginForm.value).subscribe(
      () => {
        this.router.navigateByUrl(this.returnUrl);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getFacebookLoginStatus = async () => {
    window.FB.getLoginStatus((response: { status: string; authResponse: { accessToken: string; }; }) => {
      if (response.status === 'connected') {
        this.fbAccessToken = response.authResponse.accessToken;
      }
    })
  }

  facebookLogin = () => {
    this.fbLoading = true;
    const apiLogin = (accesToken: string) => {
      this.accountService.fbLogin(accesToken).subscribe(user => {
        this.fbLoading = false;
        this.router.navigateByUrl('');
      }, error => {
        console.log(error);
        this.fbLoading = false;
      })
    }
    if (this.fbAccessToken) {
      apiLogin(this.fbAccessToken);
    } else {
      window.FB.login((response: { authResponse: { accessToken: string; }; }) => {
        apiLogin(response.authResponse.accessToken);
      }, {scope: 'public_profile,email'})
    }
  }
}
