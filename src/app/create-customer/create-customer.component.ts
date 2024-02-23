import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomerService } from '../Services/customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrl: './create-customer.component.scss'
})
export class CreateCustomerComponent {
  // customerForm!: FormGroup;

  constructor(private formBuilder: FormBuilder,private customer:CustomerService,private route:Router) { 

  }

  customerForm: FormGroup =  new FormGroup({
      customerFirstName:new FormControl('',Validators.required),
      customerLastName: new FormControl('',Validators.required),
      customerAddress: new FormControl('',Validators.required),
      customerMobile: new FormControl('',[Validators.required,Validators.pattern('^[0-9]{10}$')]),
      customerAdharCard:new FormControl('',[Validators.required,Validators.pattern('^[0-9]{12}$')])
    });
  ngOnInit(): void {
    // this.customerForm = this.formBuilder.group({
    //   customerFirstName: ['', Validators.required],
    //   customerLastName: ['', Validators.required],
    //   customerAddress: ['', Validators.required],
    //   customerMobile: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
    //   customerAdharCard: ['', [Validators.required, Validators.pattern('^[0-9]{12}$')]]
    // });
    //  this.customerForm = new FormGroup({
    //   customerFirstName:new FormControl('',Validators.required),
    //   customerLastName: new FormControl('',Validators.required),
    //   customerAddress: new FormControl('',Validators.required),
    //   customerMobile: new FormControl('',[Validators.required,Validators.pattern('^[0-9]{10}$')]),
    //   customerAdharCard:new FormControl('',[Validators.required,Validators.pattern('^[0-9]{12}$')])
    // });
  }

  onSubmit() {
    if (this.customerForm.valid) 
    {
      
      this.customer.AddCustomer(this.customerForm.value).subscribe(
        (result)=>{
          this.customer.reloadCurrentRoute();
          }
        
      );
      //this.route.navigate(['customer']);
        this.customer.reloadCurrentRoute();
    } else {
      this.customerForm.markAllAsTouched();
    }
  }
}
