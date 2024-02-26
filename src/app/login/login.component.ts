import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomerService } from '../Services/customer.service';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm: FormGroup =  new FormGroup({
    userName:new FormControl('',Validators.required),
    password: new FormControl('',Validators.required),
    
  });
  /**
   *
   */
  constructor(private cust:CustomerService, private auth :AuthService, private route: Router) {
 
    
  }
  onSubmit(){
    if (this.loginForm.valid) {
      this.cust.login(this.loginForm.value).subscribe(
        (result)=>{
          if (result.isResult==='true') {
            console.log("hello saba......"+result);
            const token : string= "hshfusdhfushfsu";
            this.auth.settoken(token);
            this.auth.reloadCurrentRouteTransaction();
            //this.route.navigateByUrl("/");
          }else{
            alert("Incorrect username or password");
            this.route.navigateByUrl('/login');
          }
          
       
        },
        (error)=>{
          console.log("error"+error.message);
          alert("Something went Wrong");
        }
      )
    }
  }
}
