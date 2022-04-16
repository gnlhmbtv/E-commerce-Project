import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ISize } from '../shared/models/productSize';

@Injectable({
  providedIn: 'root'
})
export class SizeService {
 baseUrl = 'https://localhost:5001/api/';

  constructor(private http:HttpClient) { }

  getSizes(){
    return this.http.get<ISize[]>(this.baseUrl + 'products/sizes');
  }


  getSizeById(id:number):Observable<ISize>{
    return this.http.get<ISize>(environment.apiUrl+"size/"+id)
  }

  createSize(size:FormData){
    return this.http.post(environment.apiUrl + 'size',size);
  }

  deleteSize(id:number){
    return this.http.delete(environment.apiUrl + 'size/' + id);
  }
}
