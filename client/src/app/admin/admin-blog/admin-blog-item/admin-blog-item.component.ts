import { Component, EventEmitter, Input, OnInit, Output, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Blog } from 'src/app/shared/models/blog';

@Component({
  selector: 'app-admin-blog-item',
  templateUrl: './admin-blog-item.component.html',
  styleUrls: ['./admin-blog-item.component.css']
})
export class AdminBlogItemComponent implements OnInit {

  modalRef: BsModalRef;
  @Input() blog:Blog;
  @Output() onDelete=new EventEmitter<Blog>();

  constructor(private modalService: BsModalService) { }

  ngOnInit(): void {
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  deleteBlog(blog:Blog){
    this.onDelete.emit(blog);
  }
}
