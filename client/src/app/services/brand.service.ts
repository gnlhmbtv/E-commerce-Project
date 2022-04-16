import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IBrand } from '../shared/models/brand';
import { BrandParams } from '../shared/models/brandParams';
import { IPaginationBrand } from '../shared/models/pagination';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  baseUrl = 'https://localhost:5001/api/';

  constructor(private http:HttpClient) { }

  // getBrands(){
  //   let params = new HttpParams();

  //   // if (brandParams.search) {
  //   //   params = params.append('search', brandParams.search);
  //   // }


  //   return this.http.get<IPaginationBrand>(this.baseUrl + 'productbrand', {observe: 'response', params})
  //     .pipe(
  //       map((dm: IBrand[]) => {
  //         return dm;
  //       })
  //     );
  // }

  getBrands(){
    return this.http.get<IBrand[]>(this.baseUrl + 'products/brands');
  }

  getBrandById(id:number):Observable<IBrand>{
    return this.http.get<IBrand>(environment.apiUrl+"brand/"+id)
  }

  createBrand(brand:FormData){
    return this.http.post(environment.apiUrl + 'brand',brand);
  }

  deleteBrand(id:number){
    return this.http.delete(environment.apiUrl + 'brand/' + id);
  }

}
