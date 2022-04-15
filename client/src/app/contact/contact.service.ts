import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Contact } from '../shared/models/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  getAllContacts():Observable<Contact[]>{
    return this.http.get<Contact[]>(environment.apiUrl+'contact')
  }

  getContactById(id:number):Observable<Contact>{
    return this.http.get<Contact>(environment.apiUrl+"contact/"+id)
  }

  createContact(contact:FormData){
    return this.http.post(environment.apiUrl + 'contact',contact);
  }

  deleteContact(id:number){
    return this.http.delete(environment.apiUrl + 'contact/' + id);
  }
}
