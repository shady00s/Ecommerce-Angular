import { Component, OnInit, OnChanges, SimpleChanges, AfterViewChecked, ChangeDetectorRef } from '@angular/core';
import { delay } from 'rxjs';
import { CartService } from 'src/app/services/cart/cart.service';
import { Iproducts } from './../../../models/iproducts';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit, AfterViewChecked {
  productsList: Iproducts[] = []
  products: number[] = []

  itemsPrice: number = 0
  totalPrice: number = 0
  discountValue: number = 0
  delivaryPrice: number = 21
  porductCount:number = 1


  constructor(private cartService: CartService, private cd: ChangeDetectorRef) {
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

      this.cartService.getProductById(this.products[index]).pipe(delay(200)).subscribe(e => {
        this.productsList.push(e)
        this.itemsPrice = Math.round((this.itemsPrice + e.price) * 100) / 100

        this.totalPrice = Math.round((this.itemsPrice + this.delivaryPrice) * 100) / 100
      })

    }

  }




removeProduct(id: number) {

  let oldCart = [...JSON.parse(localStorage.getItem('cart-items')!)]

  let newCart = oldCart.filter(e => e != id)

  localStorage.setItem('cart-items', JSON.stringify(newCart))

  this.products = [...JSON.parse(localStorage.getItem('cart-items')!)]

  this.productsList = this.productsList.filter(e => e.id != id)
}

addProductPrice(id: number) {

  let index = this.products.indexOf(id)

  console.log(this.productsList[index].price)
  console.log(this.itemsPrice)
  this.itemsPrice =  (this.itemsPrice + this.productsList[index].price)
  ++this.porductCount

  this.totalPrice = this.itemsPrice + this.delivaryPrice
  return this.itemsPrice
}


removeProductPrice(id: number) {
  let index = this.products.indexOf(id)
 
  if (this.porductCount <= 1) {
  

    this.removeProduct(id)
  }
  else {


    this.itemsPrice = Math.round((this.itemsPrice - this.productsList[index].price) * 100) / 100
    this.totalPrice = Math.round((this.itemsPrice + this.delivaryPrice) * 100) / 100

    --this.porductCount
  }
}


productAmount(id:number){
 
  return this.porductCount
}

}
