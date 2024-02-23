import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CustomerComponent } from './customer/customer.component';
import { AccountComponent } from './account/account.component';
import { TransactionComponent } from './transaction/transaction.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditcustomerComponent } from './editcustomer/editcustomer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CreateAccontComponent } from './create-accont/create-accont.component';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CustomerComponent,
    AccountComponent,
    TransactionComponent,
    CreateCustomerComponent,
    EditcustomerComponent,
    PageNotFoundComponent,
    CreateAccontComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    provideClientHydration(),
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
