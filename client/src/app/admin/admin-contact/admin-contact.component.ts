import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ContactService } from 'src/app/contact/contact.service';
import { Contact } from 'src/app/shared/models/contact';

@Component({
  selector: 'app-admin-contact',
  templateUrl: './admin-contact.component.html',
  styleUrls: ['./admin-contact.component.css']
})
export class AdminContactComponent implements OnInit {

  contacts:Contact[];

  constructor(private contactService:ContactService,
              private toastr:ToastrService) { }

  ngOnInit(): void {
    this.getAllContacts();
  }

  getAllContacts(){
    this.contactService.getAllContacts().subscribe(contacts=>{
      this.contacts=contacts;
    },error => {
      console.log(error);
    })
  }

  onDelete(contact:Contact) {
    this.contactService.deleteContact(contact.id)
      .subscribe(x=>{
        this.toastr.warning(contact.name + ' is deleted');
      },error => console.log(error))
  }

}
