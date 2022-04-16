import { Component, EventEmitter, Input, OnInit, Output, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Contact } from 'src/app/shared/models/contact';

@Component({
  selector: 'app-admin-contact-item',
  templateUrl: './admin-contact-item.component.html',
  styleUrls: ['./admin-contact-item.component.css']
})
export class AdminContactItemComponent implements OnInit {

  modalRef: BsModalRef;
  @Input() contact:Contact;
  @Output() onDelete=new EventEmitter<Contact>();

  constructor(private modalService: BsModalService) { }

  ngOnInit(): void {
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  deleteAppointment(contact:Contact){
    this.onDelete.emit(contact);
  }

}
