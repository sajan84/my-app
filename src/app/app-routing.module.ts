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
import { LoginComponent } from './login/login.component';
import { authGuard } from './auth.guard';
import { LoaderComponent } from './loader/loader.component';


const routes: Routes = [
  { path: '', component: HomeComponent,canActivate:[authGuard] },
  {path:'login',component:LoginComponent},
  { path: 'customer',
   component: CustomerComponent,canActivate:[authGuard] 
 },
  { path: 'account', component: AccountComponent,canActivate:[authGuard] },
  { path: 'transaction', component: TransactionComponent,canActivate:[authGuard] },
  {path:'createcustomer',component:CreateCustomerComponent,canActivate:[authGuard]},
 {path:'editcustomer',component:EditcustomerComponent,canActivate:[editauthGuard]},
 {path:'createaccount',component:CreateAccontComponent,canActivate:[authGuard]},
 {path:'withdraw',component:WithdrawComponent,canActivate:[authGuard]},
{path:'credit',component:CreditComponent,canActivate:[authGuard]},
{path:'about',component:LoaderComponent},
  {path:'**',component:PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
