import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-admin-brand-create',
  templateUrl: './admin-brand-create.component.html',
  styleUrls: ['./admin-brand-create.component.css']
})
export class AdminBrandCreateComponent implements OnInit {

  // @ViewChild('file') file;
  formData: FormData = new FormData();
  form: FormGroup;

  get _name(){
    return this.form.get('name');
  }

  constructor( private brandService:BrandService,
    private route:Router,
    private toastr: ToastrService,
    private http:HttpClient,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    this.formCreate();
  }

  formCreate(){
    this.form = this.fb.group({
      name: ['',[Validators.required]]
    });
  }

  onSubmit() {
 
    if(this.form.valid){
      this.formData.append('Name', this._name.value);
      this.brandService.createBrand(this.formData).subscribe(x=> {
        console.log(x);
        this.route.navigate(['/admin/brand']);
        this.toastr.success('Brand is created');
      },error=>this.toastr.error(error));
    }
  }

}
