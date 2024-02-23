import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomerService } from '../Services/customer.service';
import { Router } from '@angular/router';
import { SharedEditDataService } from '../Services/shared-edit-data.service';

@Component({
  selector: 'app-editcustomer',
  templateUrl: './editcustomer.component.html',
  styleUrl: './editcustomer.component.scss'
})
export class EditcustomerComponent implements OnInit {

  customerEditForm!: FormGroup;
  FillData:any;
  constructor(private formBuilder: FormBuilder,private customer:CustomerService,private route:Router,private shared:SharedEditDataService) { 

  }
  ngOnInit(): void {
   this.FillData=this.shared.getcustomer();
    this.customerEditForm = this.formBuilder.group({

      customerId:[this.FillData.customerId,Validators.required],
      customerFirstName: [this.FillData.customerFirstName, Validators.required],
      customerLastName: [this.FillData.customerLastName, Validators.required],
      customerAddress: [this.FillData.customerAddress, Validators.required],
      customerMobile: [this.FillData.customerMobile, [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      customerAdharCard: [this.FillData.customerAdharCard, [Validators.required, Validators.pattern('^[0-9]{12}$')]]
    });
  }

  onSubmit() {
    if (this.customerEditForm.valid) {
      this.customer.EditCustomer(this.customerEditForm.value).subscribe((result)=>{
        this.customer.reloadCurrentRoute();
      })
    }else {
     alert("Some problem occur")
    
  }

}
}