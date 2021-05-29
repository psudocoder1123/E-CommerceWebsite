import { Component, OnInit } from '@angular/core';
import { CheckOutService } from '../services/check-out.service';

@Component({
  selector: 'order-success',
  templateUrl: './order-success.component.html',
  styleUrls: ['./order-success.component.css']
})
export class OrderSuccessComponent implements OnInit {

  sucessOrders:any=[]

  constructor(private checkOutServive : CheckOutService) { 

   

  }

  ngOnInit(): void {
  
    console.log(" Order-sucess constructor")
    this.getOrders();
   
  }

  getOrders(){

    this.checkOutServive.getAllPlacedOrdersForCurrentUser().subscribe((v)=>{

      console.log("Printing All sucess orders")
      console.log(v)
      this.sucessOrders = v;

    });

   console.log("In order Sucess Component");
   
  }





}
