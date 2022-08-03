import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  imagePath:string='sadasdasd'
  title:string='sdadas'

  @Input()value:any;
  constructor() { }

  ngOnInit(): void {
  }

  addToCart(id:Number){
    let idsList = [] 

    let savedId = localStorage.getItem('cart-items')
    if(savedId){
      idsList.push(...JSON.parse(savedId),id)
      localStorage.setItem('cart-items',JSON.stringify(idsList))
    }
    else{
      idsList.push(id)
      localStorage.setItem('cart-items',JSON.stringify(idsList))
    }
    
  }

}
