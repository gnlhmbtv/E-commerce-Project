import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Blog } from '../shared/models/blog';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http:HttpClient) { }

  getAllBlogs():Observable<Blog[]>{
    return  this.http.get<Blog[]>(environment.apiUrl+'blog' )
  }

  getBlogById(id:number):Observable<Blog>{
    return this.http.get<Blog>(environment.apiUrl+"blog/"+id)
  }

  createBlog(blog:FormData){
    return this.http.post(environment.apiUrl + 'blog',blog);
  }

  editBlog(id:number,blog:FormData){
    return this.http.put(environment.apiUrl + 'blog/' + id,blog);

  }

  deleteBlog(id:number){
    return this.http.delete(environment.apiUrl + 'blog/' + id);
  }
}
