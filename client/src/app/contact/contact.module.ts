import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainContactComponent } from './main-contact/main-contact.component';
import { SharedModule } from '../shared/shared.module';
import { ContactPageComponent } from './contact-page.component';



@NgModule({
  declarations: [ContactPageComponent, MainContactComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [MainContactComponent]
})
export class ContactModule { }
