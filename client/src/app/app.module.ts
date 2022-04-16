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
import { MainContactComponent } from './contact/main-contact/main-contact.component';
import { ContactPageComponent } from './contact/contact-page.component';
import { ContactModule } from './contact/contact.module';
import { BlogPageComponent } from './blog-page/blog-page.component';
import { BlogDetailPageComponent } from './blog-detail-page/blog-detail-page.component';

@NgModule({
  declarations: [
    AppComponent,
    OrderDetailedComponent,
    OrdersComponent,
    RolesModalComponent,
    BlogPageComponent,
    BlogDetailPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CoreModule,
    HomeModule,
    NgxSpinnerModule,
    ContactModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi:true},
    {provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi:true},
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi:true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
