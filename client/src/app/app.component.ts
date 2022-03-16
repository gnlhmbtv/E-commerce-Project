import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IProduct } from './shared/models/product';
import { IPagination } from './shared/models/pagination';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'client';
  products: IProduct[];

  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.http.get('https://localhost:5001/api/Products').subscribe((response: IPagination) => {
      this.products = response.data;
    }, error => {
      console.log(error);
    })
  }
} 