import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginService } from './login.service';
import { ShoppingCartService } from './shopping-cart.service';

@Injectable({
  providedIn: 'root'
})
export class CheckOutService {

  productsAddress:any=[];
  products:any=[]
  suceOrder:any=[]

  url="http://localhost:8081/api3/checkout"

  constructor(  private shoppingCartService : ShoppingCartService ,
     private http:HttpClient ,
     private loginservice:LoginService ) { }

   //Json Contenate Function
   jsonConcat(o1:any, o2:any) {
    for (var key in o2) {
     o1[key] = o2[key];
    }
    return o1;
   }


  
  Combine( info:any)
  {
    //get all products from cart(local Storage) 
    this.products=  this.shoppingCartService.allStorage();

    for (var p of this.products) {
     
      this.productsAddress.push (this.jsonConcat(p, info) ) ;
     }

     return this.productsAddress

  }


  // checkout prod to database

  checkOutProduct(checkOutItem:any)
  {

    console.log("In add Chek-out service angular")
    console.log(checkOutItem)
  

    return this.http.post(this.url,checkOutItem,{
      headers : new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.loginservice.getToken()}`
      })
    }).subscribe((res)=>{
      console.log(res)
    })
  

 }

  getAllPlacedOrdersForCurrentUser()
  {

    console.log("***In checkout service get all orders*****")

     return this.http.get(this.url,{
      headers : new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.loginservice.getToken()}`
      })
    })
   
  }







}
