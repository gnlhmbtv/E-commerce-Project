import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ToastrService } from 'ngx-toastr';
import { IBlog } from 'src/app/shared/models/blog';
import { BlogParams } from 'src/app/shared/models/blogParams';
import { AccountService } from '../../account/account.service';
import { CommentService } from '../../comment/comment.service';
// import { Blog } from '../../shared/models/blog';
import { Commment } from '../../shared/models/comment';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-blog-detail-page',
  templateUrl: './blog-detail-page.component.html',
  styleUrls: ['./blog-detail-page.component.css']
})
export class BlogDetailPageComponent implements OnInit {


  @ViewChild('search', {static: false}) searchTerm: ElementRef;
  jwtHelper=new JwtHelperService();
  form: FormGroup;
  blog:IBlog;
  blogs: IBlog[];
  blogParams = new BlogParams();
  commments:Commment[];
  id:number;
  totalCount: number;
  constructor(private blogService:BlogService
    ,private activatedRoute:ActivatedRoute
    ,private commentService:CommentService
    ,private route:Router
    ,private toastrService: ToastrService
    ,private authService:AccountService) { }

  ngOnInit(): void {
    this.getBlogById();
    this.getBlogs();
    // this.getCommentsByBlog()
    this.formCreate()
    this.id=parseInt(this.authService.decodedToken?.nameid)
  }

  onSearch(){
    this.blogParams.search = this.searchTerm.nativeElement.value;
    this.blogParams.pageNumber = 1;
    this.getBlogs();
  }

  getBlogs(){
    this.blogService.getBlogs(this.blogParams)
    .subscribe(response => {
      this.blogs = response.data;
      this.blogParams.pageNumber = response.pageIndex;
      this.blogParams.pageSize = response.pageSize;
      this.totalCount = response.count;
    }, error => {
      console.log(error);

    });
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
