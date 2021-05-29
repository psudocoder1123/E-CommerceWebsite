import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {

  products: any = [];

  constructor( private productService : ProductService ) {
      this.productService.getAllProducts().subscribe(list =>{

        this.products = list
        console.log(this.products)
      })
   }

  ngOnInit(): void {
  }

}
