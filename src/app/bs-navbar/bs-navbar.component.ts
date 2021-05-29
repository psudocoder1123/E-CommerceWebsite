import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent implements OnInit{

  totalItems=0;

  public LoggedIn=false;
  public isAdmin=false;
  data: any

  constructor( private loginService : LoginService, private router : Router) { 
    this.totalItems = localStorage.length;
  }

  ngOnInit(): void {
  
   
  }
  ngDoCheck(){
    this.data= this.loginService.getUserDataFromLocalStorage()

    if(this.data.token==undefined || this.data.token==''|| this.data.token==null)
    {
     this.LoggedIn = false
    }
    else
    {
     this.LoggedIn = true
    
     if(this.data.roles == "ROLE_ADMIN"){
        this.isAdmin= true
     }
     else
     {
      this.isAdmin= false  
     }
    }

  }

  logoutUser(){
    
    this.loginService.logout();
    this.router.navigate(['/'])


  }


}
