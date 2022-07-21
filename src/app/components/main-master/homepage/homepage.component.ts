import { AfterViewChecked, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ProductsService } from 'src/app/services/products/products.service';
import { Iproducts } from './../../../models/iproducts';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit ,OnChanges ,AfterViewChecked{
  productsData:Iproducts[]=[]
  constructor(private getProductService:ProductsService) { }
  ngAfterViewChecked(): void {
    console.log(this.productsData)
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.productsData)
  }

  ngOnInit(): void {
    this.getProductService.getDataFromApi().subscribe((data)=>{ console.log(this.productsData);  this.productsData = data})
   
  }

}
