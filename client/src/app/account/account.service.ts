import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject, map, of, ReplaySubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IAddress } from '../shared/models/address';
import { CustomEncoder } from '../shared/models/custom-encoder';
import { ForgotPassword } from '../shared/models/forgot-password';
import { ResetPassword } from '../shared/models/reset-password';
import { IUser } from '../shared/models/user';
@Injectable({
  providedIn: 'root'
})
export class AccountService {
  baseUrl = environment.apiUrl;
  private currentUserSource = new ReplaySubject<IUser>(1);
  currentUser$ = this.currentUserSource.asObservable();
  jwtHelper=new JwtHelperService();


  constructor(private http: HttpClient, private router: Router) { }

  decodedToken:any;


  getUsers(){
    return this.http.get<IUser[]>(this.baseUrl + 'account/getusers');
  }


  loadCurrentUser(token: string){

    if(token === null){
      this.currentUserSource.next(null);
      return of(null);
    }
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', `Bearer ${token}`);

    return this.http.get(this.baseUrl + 'account', {headers}).pipe(
      map((user: IUser) => {
        if (user) {
          localStorage.setItem('token', user.token);
          this.currentUserSource.next(user);
          this.decodedToken=this.jwtHelper.decodeToken(user.token);
        }
      })
    );
  }

  login(values: any){
    return this.http.post(this.baseUrl + 'account/login', values).pipe(
      map((user: IUser) => {
        if(user){
          localStorage.setItem('token', user.token);
          this.currentUserSource.next(user);
        }
      })
    );
  }


  register(values: any){
    return this.http.post(this.baseUrl + 'account/register', values).pipe(
      map((user: IUser) => {
        if(user){
          localStorage.setItem('token', user.token);
          this.currentUserSource.next(user);
        }
      })
    );
  }

  confirmEmail = (route: string, token: string, email: string) => {
    let params = new HttpParams({encoder: new CustomEncoder()})
    params = params.append('token', token);
    params = params.append('email', email);

    return this.http.get(this.baseUrl + 'account/EmailConfirmation', {params: params});
  }


  logout(){
    localStorage.removeItem('token');
    this.currentUserSource.next(null);
    this.router.navigateByUrl('/');
  }

  fbLogin(accessToken: string) {
    return this.http.post(this.baseUrl + `account/fbLogin?accessToken=${accessToken}`, {}).pipe(
      map((response: any) => {
        const user = response;
        if (user) {
          localStorage.setItem('token', user.token);
          this.currentUserSource.next(user);
          this.decodedToken=this.jwtHelper.decodeToken(user.token);
          console.log(user.token);
          
        }
      })
    )
  }

  checkEmailExists(email: string){
    return this.http.get(this.baseUrl + 'account/emailexists?email=' + email);
  }

  getUserAddress() {
    return this.http.get<IAddress>(this.baseUrl + 'account/address');
  }

  updateUserAddress(address: IAddress) {
    return this.http.put<IAddress>(this.baseUrl + 'account/address', address);
  }

   forgotPassword = (route: string, body: ForgotPassword) => {
    return this.http.post(this.baseUrl + 'account/ForgotPassword', body);
  }

   resetPassword = (route: string, body: ResetPassword) => {
    return this.http.post(this.baseUrl + 'account/ResetPassword', body);
  }

}
