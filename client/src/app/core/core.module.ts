import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from '../shared/components/nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { TestErrorComponent } from './test-error/test-error.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ServerErrorComponent } from './server-error/server-error.component';
import { ToastrModule } from 'ngx-toastr';
import { FooterComponent } from '../shared/components/footer/footer.component';



@NgModule({
  declarations: 
  [ TestErrorComponent, NotFoundComponent, ServerErrorComponent
  ],
  imports: [
    CommonModule, 
    RouterModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
      preventDuplicates: true
    })
  ],
  exports: []
})
export class CoreModule { }
