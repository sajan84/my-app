import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../Services/customer.service';
import { log } from 'console';
import { Router } from '@angular/router';
import { SharedEditDataService } from '../Services/shared-edit-data.service';
import { NgModel } from '@angular/forms';

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
    searchText!:any;
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

    deleteCustomer(customer:number):void{
      var checkWanttoDelete=confirm(`Are You Sure Want To delete customer:${customer} ?`);
      if (checkWanttoDelete==false) {
        return;
      }
      this.customer.DeleteCustomer(customer).subscribe((result)=>{
        console.log("Deleted");
        this.customer.reloadCurrentRoute();
      })
      
         
    }

    searchCustomers(){
      if (this.searchText) {
        this.customer.getCustomer(this.searchText.trim()).subscribe(
          (result) => {
          console.log(result);
          this.customerData = result.result;
        },
        (error) => {
          if (error.status === 404) {
            alert('Customer not found');
          } else {
            console.error(error);
          }
        }
        );
      } else {
        this.getCustomer();
      }
    }
    onsearchCustomers(){
      if (this.searchText) {
        this.customer.getCustomer(this.searchText).subscribe(
          (result) => {
          console.log(result);
          this.customerData = result.result;
        },
        (error) => {
         this.getCustomer();
        }
        );
      } else {
        this.getCustomer();
      }
    }

    onSearchInputChange(event: any) {
      if (event.target.value === '') { // Check if search input is empty
        this.getCustomer(); // If empty, fetch all customers
      }else{
        this.onsearchCustomers();
      }
    }
    
}
