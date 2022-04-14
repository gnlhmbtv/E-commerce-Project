import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactComponent } from './contact.component';
import { MainContactComponent } from './main-contact/main-contact.component';



@NgModule({
  declarations: [
    ContactComponent,
    MainContactComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
  ]
})
export class ContactModule { }
