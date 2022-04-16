import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BlogService } from 'src/app/blog-page/blog.service';

@Component({
  selector: 'app-admin-blog-update',
  templateUrl: './admin-blog-update.component.html',
  styleUrls: ['./admin-blog-update.component.css']
})
export class AdminBlogUpdateComponent implements OnInit {

  // get _title(){
  //   return this.form.get('title');
  // }

  // get _topic(){
  //   return this.form.get('topic');
  // }

  // get _description(){
  //   return this.form.get('description');
  // }

  // @ViewChild('file') file;
  // formData: FormData = new FormData();
  // form: FormGroup;
  // blog:Blog;

  // @HostListener('window:beforeunload',['$event'])
  // unloadNotification($event:any, isSub:boolean){
  //   if (this.form.dirty){
  //     $event.returnValue=true;
  //   }
  // }

  constructor(private blogService:BlogService,
              private route:Router,
              private activatedRoute:ActivatedRoute,
              private toastr: ToastrService,
              private fb:FormBuilder) { }

  ngOnInit(): void {

  }

  // formUpdate(){
  //   this.form = this.fb.group({
  //     title: ['',[Validators.required]],
  //     topic: ['',[Validators.required]],
  //     description: ['',[Validators.required]]
  //   });
  // }

  // getBlogById(){
  //   this.blogService.getBlogById(+this.activatedRoute.snapshot.params.id)
  //     .subscribe(blog=>{
  //       this.blog=blog,
  //         error=>console.log(error)
  //     })
  // }

  // onSubmit() {
  //   if(this.form.valid){
  //     // @ts-ignore
  //     this.formData.append('Id', +this.activatedRoute.snapshot.params.id);
  //     this.formData.append('Title', this._title.value);
  //     this.formData.append('Topic', this._topic.value);
  //     this.formData.append('Description', this._description.value);
  //     this.blogService.editBlog(this.blog.id,this.formData).subscribe(x=> {
  //       console.log(x);
  //       this.route.navigate(['/admin/blog']);
  //       this.toastr.success('Blog is edited');
  //     },error=>this.toastr.error(error));
  //   }
  // }

  // fileInput(event: Event) {
  //   // @ts-ignore
  //   if (event.target.files[0]){
  //     // @ts-ignore
  //     this.formData.append('Photo', event.target.files[0]);
  //   }
  // }

}
