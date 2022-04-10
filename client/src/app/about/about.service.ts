import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { About } from '../shared/models/about';

@Injectable({
  providedIn: 'root'
})
export class AboutService {

  baseUrl = 'https://localhost:5001/api/';
  constructor(private http:HttpClient) { }

  getAbout():Observable<About>{
    return this.http.get<About>(this.baseUrl+'about')
  }

  editAbout(id:number,about:FormData){
    return this.http.put(this.baseUrl + 'about/' + id,about);
  }
}
