import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { observable, Observable } from 'rxjs';
import { LoginService } from './login.service';



export interface Product {
  product_id: number;
  product_name: string;
  category: string;

  price: number;
  image_url: string;
  stock: number;
}


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  listElement: any
  



  url="http://localhost:8081/api2/products3"
  url1= "http://localhost:8081/api2/products2"


  url2 = "http://localhost:8081/api4/products4"
  
  constructor( private http:HttpClient,private loginservice:LoginService) { }

  headers : any
  Authorization : any
  var1: any
  obs:any


  addProduct(product:any)
   {
   console.log(" Product URL ",product.image_url)
    console.log("In add Product  Product service")
    console.log(product)

    return this.http.post<any>(this.url,product,{
      headers : new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.loginservice.getToken()}`
      })
    }).subscribe((res)=>{
      console.log(res)
    })

  }

  getAllProducts():Observable<Product[]>{
    return this.http.get<Product[]>(this.url1);
  }

  // getProduct(productId:any){
  //   console.log("getting Single product")

  //   console.log(this.url1+"/"+ productId)
  //     this.obs= this.http.get<Product>(this.url1+"/"+ productId);

  //     console.log(this.obs)
  //     return this.obs;
  // }

  getProduct(id:any){
    return this.http.get(`${this.url1}/${id}`);
  }

}
