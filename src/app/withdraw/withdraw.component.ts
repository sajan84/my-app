import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AccountService } from '../Services/account.service';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrl: './withdraw.component.scss'
})
export class WithdrawComponent {
  EditForm=new FormGroup({
    AccountNumber:new FormControl<any>('',Validators.required),
    Amount:new FormControl<any>('',Validators.required)
  })

  
  constructor(private account:AccountService) {}

  onSubmit(){
    this.account.Debit({accountNumber:this.EditForm.value.AccountNumber,amount:this.EditForm.value.Amount}).subscribe(
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
