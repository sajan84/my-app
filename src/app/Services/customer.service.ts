import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CustomerService {
  private apiUrl='https://localhost:7078/api/Customer/sajan';
  constructor(private http: HttpClient,private route:Router) { }

  getCustomers():Observable<any> {
    return this.http.get<any>(`${this.apiUrl}`);
  }
  AddCustomer(custoemr:any):Observable<any>{
    return this.http.post<any>("https://localhost:7078/api/Customer",custoemr);
  }
  login(loginUser:any):Observable<any>{
    return this.http.post<any>('https://localhost:7078/api/Customer/Authentication',loginUser);
  }

  reloadCurrentRoute() {
    let currentUrl = this.apiUrl;
    this.route.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this.route.navigate(['customer']);
    });
  }
  DeleteCustomer(custoemrID:any):Observable<any>{
    return this.http.delete<any>('https://localhost:7078/api/Customer/'+custoemrID);
  }
  EditCustomer(custoemer:any):Observable<any>{
    return this.http.put<any>("https://localhost:7078/api/Customer",custoemer);
  }
  getCustomer(id:number):Observable<any>{
    return this.http.get<any>("https://localhost:7078/api/Customer/"+id);
  }
  
}
