import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { AdminLayoutComponent } from './shared/admin-layout.component';

const route: Routes = [
  {path: '', component: AdminLayoutComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AdminRoutingModule { }
