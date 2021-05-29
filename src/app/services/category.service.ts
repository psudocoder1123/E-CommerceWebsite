import { query } from '@angular/animations';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Category{
  category_name: string;
}


@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  url = "http://localhost:8081/api1/categories";

  constructor( private http:HttpClient ) { 

  }

  // Get all the categories from Database.
  getCategories():Observable<Category[]>{
    return this.http.get<Category[]>(this.url
      
      );
  }

}
