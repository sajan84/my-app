import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private http:HttpClient,private route:Router) { }

  getTransaction(){
    return this.http.get<any>('https://localhost:7078/api/Transaction')
  }
  getTransctionbyAccountNumber(accountNumber:string){
    return this.http.get<any>('https://localhost:7078/api/Transaction/'+accountNumber);
  }
  reloadCurrentRoute() {
    let currentUrl ='https://localhost:7078/api/Transaction';
    this.route.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this.route.navigate(['transaction']);
    });
  }
}
