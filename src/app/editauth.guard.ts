

import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { CustomerService } from "./Services/customer.service";
import { SharedEditDataService } from "./Services/shared-edit-data.service";



@Injectable({
  providedIn: 'root'
})
export class editauthGuard implements CanActivate {
  constructor(private shared:SharedEditDataService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const customer = this.shared.getcustomer();
    if (customer) {
      return true;
    } else {
      this.router.navigate(['/404']);
      return false;
    }
  }
}