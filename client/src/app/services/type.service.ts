import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IType } from '../shared/models/productType';

@Injectable({
  providedIn: 'root'
})
export class TypeService {
  baseUrl = 'https://localhost:5001/api/';

  constructor(private http:HttpClient) { }

  getTypes(){
    return this.http.get<IType[]>(this.baseUrl + 'products/types');
  }


  getTypeById(id:number):Observable<IType>{
    return this.http.get<IType>(environment.apiUrl+"type/"+id)
  }

  createType(type:FormData){
    return this.http.post(environment.apiUrl + 'type',type);
  }

  deleteType(id:number){
    return this.http.delete(environment.apiUrl + 'type/' + id);
  }

}
