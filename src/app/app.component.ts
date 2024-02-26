import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'

  
})
export class AppComponent implements OnInit {
  title = 'my-app';
isLogged:boolean=false;
constructor(private auth:AuthService,private route:Router){
 
}
ngOnInit(): void {
  // this.isLogged=this.auth.isLoggedIn();
  
}
isLocalStorageSet(): boolean {
  return localStorage.getItem('token') !== null;
}

  logout() : void{
    this.auth.logout();
    
    
  }
}
