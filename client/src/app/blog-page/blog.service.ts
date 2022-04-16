import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IBlog } from '../shared/models/blog';
import { BlogParams } from '../shared/models/blogParams';
import { IPagination, IPaginationBlog } from '../shared/models/pagination';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  baseUrl = 'https://localhost:5001/api/';


  constructor(private http:HttpClient) { }


  getBlogs(blogParams: BlogParams){
    let params = new HttpParams();

    if (blogParams.search) {
      params = params.append('search', blogParams.search);
    }

      params = params.append('pageIndex', blogParams.pageNumber.toString());
      params = params.append('pageIndex', blogParams.pageSize.toString());
    

    return this.http.get<IPaginationBlog>(this.baseUrl + 'blog', {observe: 'response', params})
      .pipe(
        map(response => {
          return response.body;
        })
      );
  }

  getBlogById(id:number):Observable<IBlog>{
    return this.http.get<IBlog>(environment.apiUrl+"blog/"+id)
  }

  createBlog(blog:FormData){
    return this.http.post(environment.apiUrl + 'blog',blog);
  }

  // editBlog(id:number,blog:FormData){
  //   return this.http.put(environment.apiUrl + 'blog/' + id,blog);

  // }

  deleteBlog(id:number){
    return this.http.delete(environment.apiUrl + 'blog/' + id);
  }
}
