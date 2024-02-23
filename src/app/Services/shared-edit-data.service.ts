import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedEditDataService {
    customer:any;
  constructor() { }

  setCustomer(custoemer:any){
    this.customer=custoemer;
  }
  getcustomer(){
    return this.customer;
  }
}
