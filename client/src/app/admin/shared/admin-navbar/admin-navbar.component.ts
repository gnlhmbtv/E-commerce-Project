import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { AccountService } from 'src/app/account/account.service';
import { BlogService } from 'src/app/blog-page/blog.service';
import { ContactService } from 'src/app/contact/contact.service';
import { IBlog } from 'src/app/shared/models/blog';
import { BlogParams } from 'src/app/shared/models/blogParams';
import { Contact } from 'src/app/shared/models/contact';
import { IUser } from 'src/app/shared/models/user';

@Component({
  selector: 'app-admin-navbar',
  templateUrl: './admin-navbar.component.html',
  styleUrls: ['./admin-navbar.component.css']
})
export class AdminNavbarComponent implements OnInit {
  @ViewChild('search', {static: false}) searchTerm: ElementRef;

  contacts: Contact[];
  currentUser$: Observable<IUser>;
  blogParams = new BlogParams();
  blogs: IBlog[];
  totalCountBlog: number;



  constructor(private contactService:ContactService,  
    private accountService: AccountService,
    private blogService:BlogService) { }

  ngOnInit(): void {
    this.getAllContacts();
    this.currentUser$ = this.accountService.currentUser$;
  }

  getAllContacts(){
    this.contactService.getAllContacts().subscribe(contacts=>{
      this.contacts=contacts;
    },error => {
      console.log(error);
    })
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
      this.totalCountBlog = response.count;
    }, error => {
      console.log(error);

    });
  }

  logout(){
    this.accountService.logout();
  }

}
