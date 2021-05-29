import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { LoginService } from 'src/app/services/login.service';
import { ProductService } from 'src/app/services/product.service';



@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  categories : any=[]
  product : any  // for array of prod
  prod: any   // for single prod

  constructor(categoryService :  CategoryService, private productService : ProductService, private router :Router, private route: ActivatedRoute , private loginservice: LoginService  ) 
  {
    
    let id =this.route.snapshot.paramMap.get('id');
    if(id){
      let disposeMe =this.productService.getProduct(id);
      console.log(disposeMe)
     disposeMe.subscribe((p: any)=> this.prod = p)

 


     console.log("product Received")
     console.log(this.prod)
    } 
    //unsubscribe remain


    categoryService.getCategories().subscribe((listOfCategories: any)=>{
     this.categories = listOfCategories

    })


   }

  ngOnInit(): void {
  }

  save(product:any)
  {

    console.log(product)
    console.log("In Save Method")
    this.productService.addProduct(product)



    this.router.navigate(['/admin/products']);
  }


}
