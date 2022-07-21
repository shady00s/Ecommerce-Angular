import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Iproducts } from './../../models/iproducts';
import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  
  constructor(private httpClient:HttpClient) { }

  getDataFromApi():Observable<Iproducts[]>{
    return this.httpClient.get<Iproducts[]>(environment.productsApi)
  }
}
