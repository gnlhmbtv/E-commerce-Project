import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResetPasswordComponent } from './reset-password.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [ResetPasswordComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule  ]
})
export class ResetPasswordModule { }
