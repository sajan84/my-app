import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../Services/transaction.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrl: './transaction.component.scss'
})
export class TransactionComponent implements OnInit {
 transactionData:any;
 searchText!:string;
  constructor(private transaction:TransactionService) {
   
    
  }
  ngOnInit(): void {
      this.getTransaction();
  }

  getTransaction():void{
    this.transaction.getTransaction().subscribe((result)=>{
      this.transactionData=result.result;
    })
  }
  searchCustomers(){
    if (this.searchText) {
      this.transaction.getTransctionbyAccountNumber(this.searchText.trim()).subscribe(
        (result) => {
          if (result==null) {
            this.getTransaction();
          }else{
            this.transactionData = result.result;
          }
        console.log(result);
        
      },
      (error) => {
        if (error.status === 404) {
          console.log(error);
          this.getTransaction();
        } else {
          console.error(error);
          this.getTransaction();
        }
      }
      );
    } 
    else {
      console.log("search Text is null")
      this.getTransaction();
    }
  }
  onsearchCustomers(){
    if (this.searchText) {
      this.transaction.getTransctionbyAccountNumber(this.searchText).subscribe(
        (result) => {
          if (result.isResult=='false') {
            console.log("inside onserachcustoemr ")
            this.getTransaction();
          }
          else{
            console.log("inside if else  ")
            this.transactionData = result.result;
          }
        console.log(result);
        
      },
      (error) => {
        console.log("onserachcustomer else ")
       this.getTransaction();
      }
      );
    } else {
      console.log("searchText is blank inside onsearchText")
      this.getTransaction();
    }
  }

  onSearchInputChange(event: any) {
    if (event.target.value === '') { // Check if search input is empty
      console.log("inside onsearchinputchnage");
      this.getTransaction(); // If empty, fetch all customers
    }else{
      console.log("inside else  onsearchinputchnage");
      this.onsearchCustomers();
    }
  }
}
