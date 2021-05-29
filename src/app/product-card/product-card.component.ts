import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
ShoppingCartService
import { Product } from '../services/product.service';
import { ShoppingCartService } from '../services/shopping-cart.service';


@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent  {
  @Input('product') product:any;

  pid:any

  constructor() {cartService: ShoppingCartService }

  addToCart( product : Product){

    console.log("In add to cart method")
  
   this.pid = product.product_id;
    product["stock"]=1;
    
    console.log("pid",this.pid)
     console.log(product)

    localStorage.setItem(this.pid,JSON.stringify(product)) 
     
  }

}
