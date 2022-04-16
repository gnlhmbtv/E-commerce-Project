import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { IBrand } from '../shared/models/brand';
import { IPagination } from '../shared/models/pagination';
import { IProduct } from '../shared/models/product';
import { IColor } from '../shared/models/productColor';
import { ISize } from '../shared/models/productSize';
import { IType } from '../shared/models/productType';
import { ShopParams } from '../shared/models/shopParams';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  baseUrl = 'https://localhost:5001/api/';

  constructor(private http: HttpClient) { }

  getProducts(shopParams: ShopParams){
    let params = new HttpParams();

    if(shopParams.brandId !== 0){
      params = params.append('brandId', shopParams.brandId.toString());
    }

    if(shopParams.typeId !== 0){
      params = params.append('typeId', shopParams.typeId.toString());
    }

    if(shopParams.sizeId !== 0){
      params = params.append('sizeId', shopParams.sizeId.toString());
    }

    if(shopParams.typeId !== 0){
      params = params.append('typeId', shopParams.colorId.toString());
    }

    if (shopParams.search) {
      params = params.append('search', shopParams.search);
    }

     
      params = params.append('sort', shopParams.sort);
      params = params.append('pageIndex', shopParams.pageNumber.toString());
      params = params.append('pageIndex', shopParams.pageSize.toString());
    

    return this.http.get<IPagination>(this.baseUrl + 'products', {observe: 'response', params})
      .pipe(
        map(response => {
          return response.body;
        })
      );
  }

  getProduct(id: number){
    return this.http.get<IProduct>(this.baseUrl+ 'products/' + id);
  }

  getBrands(){
    return this.http.get<IBrand[]>(this.baseUrl + 'products/brands');
  }

  getTypes(){
    return this.http.get<IType[]>(this.baseUrl + 'products/types');
  }

  getSizes(){
    return this.http.get<ISize[]>(this.baseUrl + 'products/sizes');
  }

  getColors(){
    return this.http.get<IColor[]>(this.baseUrl + 'products/colors');
  }

  createProduct(product:FormData){
    return this.http.post(environment.apiUrl + 'products',product);
  }

  editProduct(id:number,product:FormData){
    return this.http.put(this.baseUrl + 'products/' + id,product);
  }

  deleteProduct(id:number){
    return this.http.delete(this.baseUrl + 'products/' + id);
  }
}
