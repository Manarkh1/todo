import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-component',
  templateUrl: './products-component.component.html',
  styleUrls: ['./products-component.component.css']
})
export class ProductsComponentComponent implements OnInit {

  constructor() { }
  listProduct=[
    {id: 1, title: "T-shirt 1", price: 18, quantity: 0, like: 0},
    {id: 2, title: "T-shirt 2", price: 21, quantity: 10, like: 0},
    {id: 3, title: "T-shirt 3", price: 16, quantity: 8, like: 0}, ]

    decrementProduct(element:any): void{
      element.quantity=element.quantity-1;

    }
    decrementlike(element:any):void{
      element.like=element.like-1;

    }
    listProductFilter=this.listProduct;
    inputPrice:number=0;
    showProducts():any{
   
   this.listProductFilter=this.listProduct.filter(el=>el.price<this.inputPrice) ;
    }
  ngOnInit(): void {
  }

}
