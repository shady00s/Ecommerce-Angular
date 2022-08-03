import { Injectable } from '@angular/core';

import { Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Iproducts } from './../../models/iproducts';

@Injectable({
  providedIn: 'root'
})
export class CartService {




  constructor(private httpclient:HttpClient) { }


  getProductById(id:number):Observable<Iproducts>{
    return this.httpclient.get<Iproducts>(environment.productsApi +'/'+ id)
  }

}
