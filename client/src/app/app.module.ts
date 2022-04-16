import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HomeModule } from './home/home.module';
import { ErrorInterceptor } from './core/interceptors/error.interceptor';
import { NgxSpinnerModule } from 'ngx-spinner';
import { LoadingInterceptor } from './core/interceptors/loading.interceptors';
import { JwtInterceptor } from './core/interceptors/jwt.interceptor';
import { OrderDetailedComponent } from './orders/order-detailed/order-detailed.component';
import { OrdersComponent } from './orders/orders.component';
import { RolesModalComponent } from './modals/roles-modal/roles-modal.component';
import { ContactModule } from './contact/contact.module';
import { BlogPageModule } from './blog-page/blog-page.module';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ForgotPasswordModule } from './forgot-password/forgot-password.module';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ResetPasswordModule } from './reset-password/reset-password.module';


@NgModule({
  declarations: [
    AppComponent,
    OrderDetailedComponent,
    OrdersComponent,
    RolesModalComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CoreModule,
    HomeModule,
    NgxSpinnerModule,
    ContactModule,
    BlogPageModule,
    ForgotPasswordModule,
    ResetPasswordModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi:true},
    {provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi:true},
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi:true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
