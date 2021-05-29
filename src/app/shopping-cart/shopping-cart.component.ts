import { Route } from '@angular/compiler/src/core';
import { Component, DoCheck, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { ProductService } from '../services/product.service';
import { ShoppingCartService } from '../services/shopping-cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit , OnDestroy, DoCheck {

   products: any=[]
   pid:any
   total:any
   idp:any

   token :any

  constructor(private cartService : ShoppingCartService, private loginService : LoginService , private router : Router ) 
  {
    this.token = loginService.getToken()
    this.products=  cartService.allStorage()
    console.log(this.products)
  }

  CheckOut(){

    this.router.navigate(['/check-out']);
  
  
  }



  add(id:any)
  {
    for (var i = 0; i < this.products.length; i++) {
      if (this.products[i].product_id === id) {
        this.products[i].stock = this.products[i].stock+1
        return;
      }
    }
  }

  remove(id:any)
  {
    for (var i = 0; i < this.products.length; i++) {
      if (this.products[i].product_id === id) {
        this.products[i].stock = this.products[i].stock-1
        return;
      }
    }
  }

  // Delete product from cart depending on Id
  deleteProd(pid:any){
    console.log("In delete Product method")
   
    for (let [i, user] of this.products.entries()) {
      if (user.product_id == pid) {
          this.products.splice(i, 1);
      }
   }
  }

  clearCart(){
    this.products=[]
    localStorage.clear() 
  }
  
 
  

  ngDoCheck() {
    
  this.total=0;

  console.log("Total ", this.total)


  this.products.forEach( (value:any) => {
      
    this.total= this.total+ (value.stock * value.price )

});

  //for removing product with 0 stock
this.products.forEach( (value:any) => {
  if(value.stock ==0)
  {
     this.deleteProd(value.product_id)
  }

});

   
 }


  ngOnInit( ): void {
  }

  

  cartItems : any=[]




  ngOnDestroy(){
   
    this.products.forEach(function (value:any) {
      localStorage.setItem(value.product_id,JSON.stringify(value)) 
      
  });

 }






}
