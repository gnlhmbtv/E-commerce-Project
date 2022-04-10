import { Component, OnInit } from '@angular/core';
import { About } from '../shared/models/about';
import { AboutService } from './about.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  about:About;
  constructor(private aboutService:AboutService) { }

  ngOnInit() {
    // this.getAbout();
  }
  // getAbout(){
  //   this.aboutService.getAbout()
  //     .subscribe(about=>{
  //       this.about=about;
  //     }, error => {
  //       console.log(error);
  //     });
  // }
}
