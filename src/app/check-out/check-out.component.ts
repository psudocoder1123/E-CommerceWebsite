import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CheckOutService } from '../services/check-out.service';


@Component({
  selector: 'check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent  {

  addressInfo:any;
  productsAddress:any=[];

  

  constructor(private checkOutService : CheckOutService , private router :Router) { }


  save(info:any){


    info["username"]= localStorage.getItem("username")
    console.log("*********In Save Method  Checkout Component******  ") 
    console.log(info);
     this.addressInfo= info;
  

    // Obtaining Combine Object from check-out service
     this.productsAddress =  this.checkOutService.Combine(this.addressInfo);

     console.log("*** Products Array ***", this.productsAddress)
     // Adding all check-out components to database.

     for (var cp of this.productsAddress) {
         this.checkOutService.checkOutProduct(cp)
     }

     this.router.navigate(["/order-sucess"])


  }


  
   

  
 
}
