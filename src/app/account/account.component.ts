import { Component, OnInit } from '@angular/core';
import { AccountService } from '../Services/account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrl: './account.component.scss'
})
export class AccountComponent  {

  AccountData!:any;
  message:any;
  isResult:any;
  constructor(private account:AccountService,private route:Router) {
    
    
  }
  ngOnInit(): void {
      this.getAccount();
  }

  getAccount(){
    this.account.getAccount().subscribe((result)=>{
      this.AccountData=result.result;
      this.message=result.message;
      this.isResult=result.isResult; 
             
    })

  }

  deleteAccount(accountNumber:string){
this.account.DeleteAccount(accountNumber).subscribe((result)=>{
    console.log("Account Deleted SucceFully");
})
  }
  
  // editCustomer(customer:any){
    
  //   this.shared.setCustomer(customer);
  //   this.route.navigate(['editcustomer']);
  //   //this.route.navigate(['editcustomer'], { state: { customer } });
  // }

  // deleteCustomer(customer:number){
  //   this.customer.DeleteCustomer(customer).subscribe((result)=>{
  //     console.log("Deleted");
  //     this.customer.reloadCurrentRoute();
  //   })
       
  // }

}
