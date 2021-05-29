import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, ProductService } from '../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})



export class ProductsComponent {

  products: any = [];
  filteredProducts: any = [];

  category :any;
  
 
  
  constructor( 
    private productService : ProductService ,
     route: ActivatedRoute
     
     )
     
     {

    ////fetching list of products 
      this.productService.getAllProducts().subscribe(list =>{

        this.products = list
        console.log(this.products)

        // first we will get list of products that we will subscribe to Query param observal

            //get the category from param sting 
              //if category is present than filter products depending on category
              route.queryParamMap.subscribe(params=>{
                this.category = params.get('category')
          
                console.log("Selected Category = " , this.category)
          
                //setting filtered products array
                this.filteredProducts=(this.category) ?
                this.products.filter( (p :any)=> p.category === this.category )  : this.products  //else part
          
                console.log("List of filter products", this.filteredProducts)
                // In template use filter products instead of list of products
              });

        
      });

}
}
