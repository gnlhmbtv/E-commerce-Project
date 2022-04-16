import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Commment } from '../shared/models/comment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http:HttpClient) { }
  
  getAllComments():Observable<Commment[]>{
    return  this.http.get<Commment[]>(environment.apiUrl+'comment')
  }

  getCommentsByBlog(id:number):Observable<Commment[]>{
    return this.http.get<Commment[]>(environment.apiUrl+"comment/GetCommentsByBlog/"+id)
  }

  createComment(comment:Commment){
    return this.http.post(environment.apiUrl + 'comment',comment);
  }

  deleteComment(id:number){
    return this.http.delete(environment.apiUrl + 'comment/' + id);
  }
}
