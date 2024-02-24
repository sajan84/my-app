import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CustomerComponent } from './customer/customer.component';
import { AccountComponent } from './account/account.component';
import { TransactionComponent } from './transaction/transaction.component';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { EditcustomerComponent } from './editcustomer/editcustomer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { editauthGuard } from './editauth.guard';
import { CreateAccontComponent } from './create-accont/create-accont.component';
import { WithdrawComponent } from './withdraw/withdraw.component';
import { CreditComponent } from './credit/credit.component';


const routes: Routes = [
  { path: '', component: HomeComponent },

  { path: 'customer',
   component: CustomerComponent  
 },
  { path: 'account', component: AccountComponent },
  { path: 'transaction', component: TransactionComponent },
  {path:'createcustomer',component:CreateCustomerComponent},
 {path:'editcustomer',component:EditcustomerComponent,canActivate:[editauthGuard]},
 {path:'createaccount',component:CreateAccontComponent},
 {path:'withdraw',component:WithdrawComponent},
{path:'credit',component:CreditComponent},
  {path:'**',component:PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
