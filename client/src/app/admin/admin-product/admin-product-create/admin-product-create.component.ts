import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { IBrand } from 'src/app/shared/models/brand';
import { ShopService } from 'src/app/shop/shop.service';
import { BrandService } from 'src/app/services/brand.service';
import { IType } from 'src/app/shared/models/productType';
import { TypeService } from 'src/app/services/type.service';
import { ColorService } from 'src/app/services/color.service';
import { SizeService } from 'src/app/services/size.service';
import { IColor } from 'src/app/shared/models/productColor';
import { ISize } from 'src/app/shared/models/productSize';

@Component({
  selector: 'app-admin-product-create',
  templateUrl: './admin-product-create.component.html',
  styleUrls: ['./admin-product-create.component.css']
})
export class AdminProductCreateComponent implements OnInit {

  @ViewChild('file') file;
  formData: FormData = new FormData();
  form: FormGroup;
  @Input() brandForm: FormGroup; 
  brands: IBrand[];
  types: IType[];
  colors: IColor[];
  sizes: ISize[];
  
  get _name(){
    return this.form.get('name');
  }

  get _price(){
    return this.form.get('price');
  }



  // get _productBrandId(){
  //   return this.form.get('productBrandId');
  // }

  _productBrandId : string;
  _productTypeId : string;
  _productSizeId : string;
  _productColorId : string;


  get _description(){
    return this.form.get('description');
  }

  constructor(private shopService:ShopService,
    private brandService:BrandService,
    private typeService:TypeService,
    private colorService:ColorService,
    private sizeService:SizeService,
    private route:Router,
    private toastr: ToastrService,
    private http:HttpClient,
    private fb: FormBuilder,
 ) { }

  ngOnInit(): void {
    this.formCreate();

    this.brandService.getBrands().subscribe((b: IBrand[]) => {
      this.brands = b;
    },error => {
      console.log(error);
    });

    this.typeService.getTypes().subscribe((t: IType[]) => {
      this.types = t;
    },error => {
      console.log(error);
    });

    this.colorService.getColors().subscribe((c: IColor[]) => {
      this.colors = c;
    },error => {
      console.log(error);
    });

    this.sizeService.getSizes().subscribe((s: ISize[]) => {
      this.sizes = s;
    },error => {
      console.log(error);
    });
  }

  formCreate(){
    this.form = this.fb.group({
      name: ['',[Validators.required]],
      price: ['',[Validators.required]],
      // productTypeId: ['',[Validators.required]],
      // productBrandId: ['',[Validators.required]],
      // productSizeId: ['',[Validators.required]],
      // productColorId: ['',[Validators.required]],
      description: ['',[Validators.required]]
    });
  }

  onBrandSelected(event: any) {
    this._productBrandId = event.target.value;
  }
  onTypeSelected(event: any) {
    this._productTypeId = event.target.value;
  }
  onSizeSelected(event: any) {
    this._productSizeId = event.target.value;
  }
  onColorSelected(event: any) {
    this._productColorId = event.target.value;
  }


  onSubmit() {
    if(this.file.nativeElement.files.length < 1){
      this.toastr.error('Photo is required,please select photo');
      return;
    }
    if(this.form.valid){
      this.formData.append('Name', this._name.value);
      this.formData.append('Price', this._price.value);
      this.formData.append('ProductTypeId', this._productTypeId.toString());
      this.formData.append('ProductBrandId', this._productBrandId.toString());
      this.formData.append('ProductSizeId', this._productSizeId.toString());
      this.formData.append('ProductColorId', this._productColorId.toString());
      this.formData.append('Description', this._description.value);
      this.shopService.createProduct(this.formData).subscribe(x=> {
        console.log(x);
        this.route.navigate(['/admin/product']);
        this.toastr.success('Product is created');
      },error=>this.toastr.error(error));
    }
  }

  fileInput(event: Event) {
    // @ts-ignore
    console.log(event.target.files[0]);
    // @ts-ignore
    if (event.target.files[0]){
      // @ts-ignore
      this.formData.append('Photo', event.target.files[0]);
    }
  }

}
