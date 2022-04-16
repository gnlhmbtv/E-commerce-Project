import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BrandService } from 'src/app/services/brand.service';
import { IBrand } from 'src/app/shared/models/brand';
import { BrandParams } from 'src/app/shared/models/brandParams';
import { IPaginationBrand } from 'src/app/shared/models/pagination';

@Component({
  selector: 'app-admin-brand',
  templateUrl: './admin-brand.component.html',
  styleUrls: ['./admin-brand.component.css']
})
export class AdminBrandComponent implements OnInit {

  pageNumber;
  pageSize=6;
  brands:IBrand[];
  pagination:IPaginationBrand;
  brandParams = new BrandParams();
  totalCount: number;

  constructor(private brandService:BrandService,
              private toastrService:ToastrService) { }


  ngOnInit(): void {
    // this.getBrands();
  }
  getBrands(){
    this.brandService.getBrands().subscribe(response => {
      this.brands = [{id: 0, name: 'All'}, ...response];
    }, error => {
      console.log(error);

    });
  }


  // onDelete(brand:IBrand) {
  //   this.brandService.deleteBrand(brand.id)
  //     .subscribe(x=>{
  //       this.getBrands();
  //       this.toastrService.warning(brand.name + ' is deleted');
  //     },error => console.log(error))
  // }

}
