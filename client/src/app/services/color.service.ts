import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IColor } from '../shared/models/productColor';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  baseUrl = 'https://localhost:5001/api/';

  constructor(private http:HttpClient) { }

  getColors(){
    return this.http.get<IColor[]>(this.baseUrl + 'products/colors');
  }

  getColorById(id:number):Observable<IColor>{
    return this.http.get<IColor>(environment.apiUrl+"color/"+id)
  }

  createColor(color:FormData){
    return this.http.post(environment.apiUrl + 'color',color);
  }

  deleteColor(id:number){
    return this.http.delete(environment.apiUrl + 'color/' + id);
  }
}
