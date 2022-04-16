import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from 'src/app/account/account.service';
import { BlogService } from 'src/app/blog-page/blog.service';
import { CommentService } from 'src/app/comment/comment.service';
import { IBlog } from 'src/app/shared/models/blog';
import { Commment } from 'src/app/shared/models/comment';

@Component({
  selector: 'app-admin-blog-details',
  templateUrl: './admin-blog-details.component.html',
  styleUrls: ['./admin-blog-details.component.css']
})
export class AdminBlogDetailsComponent implements OnInit {

  jwtHelper=new JwtHelperService();
  form: FormGroup;
  blog:IBlog;
  commments:Commment[];
  id:number;
  constructor(
    private blogService:BlogService
    ,private activatedRoute:ActivatedRoute
    ,private commentService:CommentService
    ,private route:Router
    ,private toastrService: ToastrService
    ,private authService:AccountService
    ) { }

  ngOnInit(): void {
    this.getBlogById();
    // this.getCommentsByBlog()
     this.formCreate()
     this.id=parseInt(this.authService.decodedToken?.nameid)
  }



  getBlogById(){
    this.blogService.getBlogById(+this.activatedRoute.snapshot.params.id)
      .subscribe(blog=>{
        this.blog=blog,
          error=>console.log(error)
      });
  }

  getCommentsByBlog() {
    this.commentService.getCommentsByBlog(+this.activatedRoute.snapshot.params.id)
      .subscribe(commments=> {
        this.commments =commments,
          error=>console.log(error)
      });
  }

  formCreate(){
    this.form = new FormGroup({
      context:new FormControl('',[Validators.required]),
    });
  }

  onSubmit() {
    if(this.form.valid){
      let commment=new Commment();
      commment.context=this.form.value.context;
      commment.userId=parseInt(this.jwtHelper.decodeToken(localStorage.getItem('token')).nameid);
      commment.blogId=+this.activatedRoute.snapshot.params.id;
      console.log(commment);
      this.commentService.createComment(commment).subscribe(x=> {
        console.log(x);
        this.getCommentsByBlog();
        this.toastrService.success('Comment is created');
        // this.form.value.context="";
      },error=>this.toastrService.error(error));
    }


  }

  deleteComment(id:number) {
    this.commentService.deleteComment(id).subscribe(x=>{
      console.log(x);
      this.getCommentsByBlog();
    })

  }
}
