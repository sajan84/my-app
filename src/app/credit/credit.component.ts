import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AccountService } from '../Services/account.service';

@Component({
  selector: 'app-credit',
  templateUrl: './credit.component.html',
  styleUrl: './credit.component.scss'
})
export class CreditComponent {
  EditForm=new FormGroup({
    AccountNumber:new FormControl<any>('',Validators.required),
    Amount:new FormControl<any>('',Validators.required)
  })

  
  constructor(private account:AccountService) {}

  onSubmit(){
    this.account.Credit({accountNumber:this.EditForm.value.AccountNumber,amount:this.EditForm.value.Amount}).subscribe(
      (result)=>{
    if (result.isResult==='false') {
      alert(result.message)
    }else{
      this.account.reloadCurrentRouteTransaction();
    }
        

    },
    (error)=>{
      console.log(error);
      
    })
    
  }
}
