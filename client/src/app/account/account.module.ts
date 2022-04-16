import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AccountRoutingModule } from './account-routing.module';
import { SharedModule } from '../shared/shared.module';
import { EmailConfirmationComponent } from './email-confirmation/email-confirmation.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
    // EmailConfirmationComponent
  ],
  imports: [
    CommonModule,
    AccountRoutingModule,
    SharedModule
  ]
})
export class AccountModule { }
