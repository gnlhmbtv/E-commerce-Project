import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ShopService } from 'src/app/shop/shop.service';

@Component({
  selector: 'app-admin-product-create',
  templateUrl: './admin-product-create.component.html',
  styleUrls: ['./admin-product-create.component.css']
})
export class AdminProductCreateComponent implements OnInit {

  @ViewChild('file') file;
  formData: FormData = new FormData();
  form: FormGroup;
  
  get _name(){
    return this.form.get('name');
  }

  get _price(){
    return this.form.get('price');
  }

  get _productTypeId(){
    return this.form.get('productTypeId');
  }

  get _productBrandId(){
    return this.form.get('productBrandId');
  }

  get _productSizeId(){
    return this.form.get('productSizeId');
  }

  get _productColorId(){
    return this.form.get('productColorId');
  }

  get _description(){
    return this.form.get('description');
  }

  constructor(private shopService:ShopService,
    private route:Router,
    private toastr: ToastrService,
    private http:HttpClient,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    this.formCreate();
  }

  formCreate(){
    this.form = this.fb.group({
      name: ['',[Validators.required]],
      price: ['',[Validators.required]],
      productTypeId: ['',[Validators.required]],
      productBrandId: ['',[Validators.required]],
      productSizeId: ['',[Validators.required]],
      productColorId: ['',[Validators.required]],
      description: ['',[Validators.required]]
    });
  }


  onSubmit() {
    if(this.file.nativeElement.files.length < 1){
      this.toastr.error('Photo is required,please select photo');
      return;
    }
    if(this.form.valid){
      this.formData.append('Name', this._name.value);
      this.formData.append('Price', this._price.value);
      this.formData.append('ProductTypeId', this._productTypeId.value);
      this.formData.append('ProductBrandId', this._productBrandId.value);
      this.formData.append('ProductSizeId', this._productSizeId.value);
      this.formData.append('ProductColorId', this._productColorId.value);
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
