import { Component, OnInit } from '@angular/core';
import { AccountService } from '../Services/account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrl: './account.component.scss'
})
export class AccountComponent  {

  AccountData:any[]=[];
  message:any;
  isResult:any;
  searchText!:string;
  constructor(private account:AccountService,private route:Router) {
    
    
  }
  ngOnInit(): void {
      this.getAccount();
  }

  getAccount(){
    this.account.getAccount().subscribe((result)=>{
      this.AccountData=result.result
      this.message=result.message;
      this.isResult=result.isResult; 
             
    })

  }

  deleteAccount(accountNumber:string):void{
    var checkWanttoDelete=confirm(`Are You Sure Want To delete Account:${accountNumber} ?`);
    if (checkWanttoDelete==false) {
      return;
    }
   this.account.DeleteAccount(accountNumber).subscribe((result)=>{
    this.account.reloadCurrentRoute();
})

  }

  searchAccount(){
    if (this.searchText.trim()) {
      this.account.getAccountbyAccountNUmber(this.searchText.trim()).subscribe(
        (data:any) => {
        console.log(data);
       this.AccountData = [data.result] as any[];
      },
      (error) => {
        if (error.status === 404) {
          alert('Account not found');
          this.getAccount();
        } else {
          this.getAccount();
          console.error(error);
        }
      }
      );
    } else{
      this.getAccount();
    }
  }
  onsearchAccount(){
    if (this.searchText.trim()) {
      this.account.getAccountbyAccountNUmber(this.searchText.trim()).subscribe(
        (data:any) => {
        
       this.AccountData = [data.result] as any[];
      },
      (error) => {
        if (error.status === 404) {
          this.getAccount();
        } else {
          this.getAccount();
          console.error(error);
        }
      }
      );
    } else{
      this.getAccount();
    }
  }

  onSearchInputChange(event: any) {
    if (event.target.value === '') { // Check if search input is empty
      this.getAccount(); // If empty, fetch all customers
    }else{
      this.onsearchAccount();
    }
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
