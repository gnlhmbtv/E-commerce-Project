import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ContactService } from './contact.service';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent implements OnInit {

  get _name(){
    return this.contactform.get('name');
  }

  get _email(){
    return this.contactform.get('email');
  }

  get _phone(){
    return this.contactform.get('phone');
  }

  get _subject(){
    return this.contactform.get('subject');
  }

  get _message(){
    return this.contactform.get('message');
  }

  contactform: FormGroup;
  formData: FormData = new FormData();

  constructor(private contactService:ContactService,
              private route:Router,
              private toastr: ToastrService,
              private fb: FormBuilder) { }

  ngOnInit(): void {
    this.formCreate();
  }

  formCreate(){
    this.contactform = this.fb.group({
      name: ['',[Validators.required]],
      email: ['',[Validators.required]],
      phone: ['',[Validators.required]],
      subject: ['',[Validators.required]],
      message: ['',[Validators.required]]
    });
  }

  onSubmit() {
    if(this.contactform.valid){
      this.formData.append('Name', this._name.value);
      this.formData.append('Email', this._email.value);
      this.formData.append('Phone', this._phone.value);
      this.formData.append('Subject', this._subject.value);
      this.formData.append('Message', this._message.value);

      this.contactService.createContact(this.formData).subscribe(x=> {
        console.log(x);
        this.contactform.reset();
        this.toastr.success('Message is send');
      },error=>this.toastr.error(error));
    }
  }

}
