import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient,private route:Router) { }

  getAccount():Observable<any> {
    return this.http.get<any>('https://localhost:7078/api/Account');
  }
  AddAccoubt(Account:any):Observable<any>{
    return this.http.post<any>("https://localhost:7078/api/Account/AddAccount",Account);
  }

  reloadCurrentRoute() {
    let currentUrl ='https://localhost:7078/api/Account';
    this.route.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this.route.navigate(['account']);
    });
  }
  reloadCurrentRouteTransaction() {
    let currentUrl ='https://localhost:7078/api/transaction';
    this.route.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this.route.navigate(['transaction']);
    });
  }
  DeleteAccount(AccountNumber:any):Observable<any>{
    return this.http.delete<any>('https://localhost:7078/api/Account/'+AccountNumber);
  }
    getAccountbyAccountNUmber(accountNumber:any):Observable<any>{
      return this.http.get<any>('https://localhost:7078/api/Account/'+accountNumber)
    }

    Credit(Data:{amount:number,accountNumber:string}):Observable<any>{
      return this.http.post<any>(`https://localhost:7078/api/Account/credit/${Data.amount}/${Data.accountNumber}`,'');
    }

    Debit(Data:{amount:number,accountNumber:string}):Observable<any>{
      return this.http.post<any>(`https://localhost:7078/api/Account/debit/${Data.amount}/${Data.accountNumber}`,'');
    }
  // EditCustomer(custoemer:any):Observable<any>{
  //   return this.http.put<any>("https://localhost:7078/api/Customer",custoemer);
  // }
}
