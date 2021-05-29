import { Component, Input, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.css']
})
export class ProductFilterComponent implements OnInit {

  categories : any=[];

  @Input('category') category: any
  constructor( categoryService : CategoryService) { 

    //fetching list of categories
    categoryService .getCategories().subscribe((listOfCategories: any)=>{
      this.categories = listOfCategories
     })

  }

  ngOnInit(): void {
  }

}
