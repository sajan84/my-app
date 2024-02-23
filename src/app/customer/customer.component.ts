import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../Services/customer.service';
import { log } from 'console';
import { Router } from '@angular/router';
import { SharedEditDataService } from '../Services/shared-edit-data.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.scss',
  
})
export class CustomerComponent implements OnInit {
    /**
     *
     */

    customerData!:any;
    message:any;
    isResult:any;
    constructor(private customer:CustomerService,private route:Router,private shared:SharedEditDataService) {
      
      
    }
    ngOnInit(): void {
        this.getCustomer();
    }

    getCustomer(){
      this.customer.getCustomers().subscribe((result)=>{
        this.customerData=result.result;
        this.message=result.message;
        this.isResult=result.isResult; 
               
      })

    }
    
    editCustomer(customer:any){
      
      this.shared.setCustomer(customer);
      this.route.navigate(['editcustomer']);
      //this.route.navigate(['editcustomer'], { state: { customer } });
    }

    deleteCustomer(customer:number){
      this.customer.DeleteCustomer(customer).subscribe((result)=>{
        console.log("Deleted");
        this.customer.reloadCurrentRoute();
      })
         
    }

    
}
