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

  addToCart(){
    console.log("first")
  }

}
