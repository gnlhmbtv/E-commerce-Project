import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BlogService } from 'src/app/blog-page/blog.service';

@Component({
  selector: 'app-admin-blog-create',
  templateUrl: './admin-blog-create.component.html',
  styleUrls: ['./admin-blog-create.component.css']
})
export class AdminBlogCreateComponent implements OnInit {

  get _title(){
    return this.form.get('title');
  }

  get _topic(){
    return this.form.get('topic');
  }

  get _description(){
    return this.form.get('description');
  }

  @ViewChild('file') file;
  formData: FormData = new FormData();
  form: FormGroup;
  constructor(private blogService:BlogService,
              private route:Router,
              private toastr: ToastrService,
              private http:HttpClient,
              private fb: FormBuilder) { }

  ngOnInit(): void {
    this.formCreate();
  }

  formCreate(){
    this.form = this.fb.group({
      title: ['',[Validators.required]],
      topic: ['',[Validators.required]],
      description: ['',[Validators.required]]
    });
  }

  onSubmit() {
    if(this.file.nativeElement.files.length < 1){
      this.toastr.error('Photo is required,please select photo');
      return;
    }
    if(this.form.valid){
      this.formData.append('Title', this._title.value);
      this.formData.append('Topic', this._topic.value);
      this.formData.append('Description', this._description.value);
      this.blogService.createBlog(this.formData).subscribe(x=> {
        console.log(x);
        this.route.navigate(['/admin/blog']);
        this.toastr.success('Blog is created');
      },error=>this.toastr.error(error));
    }
  }

  fileInput(event: Event) {
    // @ts-ignore
    if (event.target.files[0]){
      // @ts-ignore
      this.formData.append('Photo', event.target.files[0]);
    }
  }

}
