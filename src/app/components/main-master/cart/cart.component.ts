import { Component, OnInit, OnChanges, SimpleChanges, AfterViewChecked, ChangeDetectorRef } from '@angular/core';
import { delay } from 'rxjs';
import { CartService } from 'src/app/services/cart/cart.service';
import { Iproducts } from './../../../models/iproducts';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit,AfterViewChecked {
 productsList: Iproducts[] =[]
 products :number[] = []
  constructor(private cartService:CartService,private cd:ChangeDetectorRef) { 
  }
  ngAfterViewChecked(): void {
    this.products = [...JSON.parse(localStorage.getItem('cart-items')!)]
    
    this.cd.detectChanges()
    
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.products = [...JSON.parse(localStorage.getItem('cart-items')!)]
  }
 
  ngOnInit(): void {
    this.products = [...JSON.parse(localStorage.getItem('cart-items')!)]
    for (let index = 0; index < this.products.length; index++) {
      
      this.cartService.getProductById(this.products[index]).pipe(delay(200)).subscribe(e=> {this.productsList.push(e)
        
      })
      
    }
    
  }  

  removeProduct(id:number){

    let oldCart =[...JSON.parse(localStorage.getItem('cart-items')!)] 
    

    let newCart = oldCart.filter(e => e != id)

    localStorage.setItem('cart-items',JSON.stringify(newCart))

    this.products = [...JSON.parse(localStorage.getItem('cart-items')!)]

    this.productsList  = this.productsList.filter(e => e.id != id)
  }



}
