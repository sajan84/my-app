import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from '../Services/account.service';

@Component({
  selector: 'app-create-accont',
  templateUrl: './create-accont.component.html',
  styleUrl: './create-accont.component.scss'
})
export class CreateAccontComponent {
  constructor(private formBuilder: FormBuilder,private route:Router,private account:AccountService) { 

  }

  AccountForm: FormGroup =  new FormGroup({
    customerId:new FormControl('',[Validators.required,Validators.pattern('^[0-9]+$')]),
    AccountTypeID: new FormControl('',Validators.required),
    balance: new FormControl('',[Validators.required,Validators.min(5000)]),
     
    });

    onSubmit(){
        this.account.AddAccoubt(this.AccountForm.value).subscribe((result)=>{
          if (result.isResult==='false') {
            alert(result.message);
          }else{
            
            console.log(result);
            this.account.reloadCurrentRoute();
          }
          
        },
        (error)=>{
          alert("some error occur");
        })
        //this.account.reloadCurrentRoute();
    }
}
