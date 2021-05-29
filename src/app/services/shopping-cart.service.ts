import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  constructor() { }

  allStorage() 
  {

    var values = [],
        keys = Object.keys(localStorage),
      
        
        i = keys.length;
        console.log("Keys", keys)

    while ( i-- ) {
       
        if( (keys[i] != "username") && (keys[i] != "roles") && (keys[i] != "token")  )
        {
          values.push(  JSON.parse(localStorage.getItem( keys[i]) || '{}') );
          localStorage.removeItem(keys[i]);
        }
        
    }

    return values;
  }

   totalPrice(products:any){

    let sum=0;
    
    products.forEach(function (value:any) {
      sum= sum+ (value.stock * value.price )
      

  });
    return sum;
   }
}
