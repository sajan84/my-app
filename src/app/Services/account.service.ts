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
  DeleteAccount(AccountNumber:any):Observable<any>{
    return this.http.delete<any>('https://localhost:7078/api/Account/'+AccountNumber);
  }
  // EditCustomer(custoemer:any):Observable<any>{
  //   return this.http.put<any>("https://localhost:7078/api/Customer",custoemer);
  // }
}
