import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLayoutComponent } from './shared/admin-layout.component';
import { LeftSidebarComponent } from './shared/left-sidebar/left-sidebar.component';
import { AdminNavbarComponent } from './shared/admin-navbar/admin-navbar.component';
import { UserManagmentComponent } from './user-managment/user-managment.component';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminContactComponent } from './admin-contact/admin-contact.component';
import { AdminContactItemComponent } from './admin-contact/admin-contact-item/admin-contact-item.component';



@NgModule({
  declarations: [
    AdminLayoutComponent,
    LeftSidebarComponent,
    AdminNavbarComponent,
    UserManagmentComponent,
    AdminContactComponent,
    AdminContactItemComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
