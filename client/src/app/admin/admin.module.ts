import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLayoutComponent } from './shared/admin-layout.component';
import { LeftSidebarComponent } from './shared/left-sidebar/left-sidebar.component';
import { AdminNavbarComponent } from './shared/admin-navbar/admin-navbar.component';
import { UserManagmentComponent } from './user-managment/user-managment.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';



@NgModule({
  declarations: [
    AdminLayoutComponent,
    LeftSidebarComponent,
    AdminNavbarComponent,
    UserManagmentComponent,
    AdminPanelComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
