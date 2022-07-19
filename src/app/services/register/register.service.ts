import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { Observable } from 'rxjs';
import { Iuser } from 'src/app/models/iuser';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private httpOptions = {}
  constructor(private httpClient:HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }

  }

    postUserData(userData:Iuser):Observable<Iuser>{
    return this.httpClient.post<Iuser>(`${environment.usersApiUrl}`,userData,this.httpOptions)
  }
}


