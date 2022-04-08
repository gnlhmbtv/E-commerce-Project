import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdminProductComponent } from './admin-product.component';


const route:Routes=[
  {path:'',component:AdminProductComponent}
  // {path:'create',component:AdminProductCreateComponent},
  // {path:'update/:id',component:AdminProductUpdateComponent,canDeactivate:[PreventUnsavedGuardDoctor]},
  // {path:':id',component:AdminProductDetailsComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(route)
  ],
  exports:[RouterModule]
})
export class AdminProductRoutingModule { }
