import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-main-contact',
  templateUrl: './main-contact.component.html',
  styleUrls: ['./main-contact.component.css']
})
export class MainContactComponent implements OnInit {

  
  get _name(){
    return this.form.get('name');
  }

  get _email(){
    return this.form.get('email');
  }

  get _phone(){
    return this.form.get('phone');
  }

  get _subject(){
    return this.form.get('subject');
  }

  get _message(){
    return this.form.get('message');
  }

  form: FormGroup;
  formData: FormData = new FormData();

  constructor(private contactService:ContactService,
              private route:Router,
              private toastr: ToastrService,
              private fb: FormBuilder) { }

  ngOnInit(): void {
    this.formCreate();
  }

  formCreate(){
    this.form = this.fb.group({
      name: ['',[Validators.required]],
      email: ['',[Validators.required]],
      phone: ['',[Validators.required]],
      subject: ['',[Validators.required]],
      message: ['',[Validators.required]]
    });
  }

  onSubmit() {
    if(this.form.valid){
      this.formData.append('Name', this._name.value);
      this.formData.append('Email', this._email.value);
      this.formData.append('Phone', this._phone.value);
      this.formData.append('Subject', this._subject.value);
      this.formData.append('Message', this._message.value);

      this.contactService.createContact(this.formData).subscribe(x=> {
        console.log(x);
        this.form.reset();
        this.toastr.success('Message is send');
      },error=>this.toastr.error(error));
    }
  }

}
