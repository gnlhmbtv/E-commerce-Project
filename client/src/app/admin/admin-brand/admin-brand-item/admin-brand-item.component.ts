import { Component, EventEmitter, Input, OnInit, Output, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { IBrand } from 'src/app/shared/models/brand';

@Component({
  selector: 'app-admin-brand-item',
  templateUrl: './admin-brand-item.component.html',
  styleUrls: ['./admin-brand-item.component.css']
})
export class AdminBrandItemComponent implements OnInit {

  modalRef: BsModalRef; 
  @Input() brand:IBrand;
  @Output() onDelete=new EventEmitter<IBrand>();

  constructor(private modalService: BsModalService) { }

  ngOnInit(): void {
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  deleteBrand(brand:IBrand){
    this.onDelete.emit(brand);
  }

}
