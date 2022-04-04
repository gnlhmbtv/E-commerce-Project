import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLayoutComponent } from './shared/admin-layout.component';
import { LeftSidebarComponent } from './shared/left-sidebar/left-sidebar.component';
import { AdminNavbarComponent } from './shared/admin-navbar/admin-navbar.component';



@NgModule({
  declarations: [
    AdminLayoutComponent,
    LeftSidebarComponent,
    AdminNavbarComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
