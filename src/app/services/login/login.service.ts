import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Iuser } from './../../models/iuser';
import { environment } from './../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private httpOptions = {
  }
  constructor(private httpClient: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }
  }



  get getloginuserData(): Observable<Iuser[]> {
    return this.httpClient.get<Iuser[]>(`${environment.usersApiUrl}`)
  }

  get isLoggedIn(): boolean {
    if (localStorage.getItem('tooken') || sessionStorage.getItem('tooken')) {
      return true
    }
    else { return false }
  }

  public saveLogInData(location: string,userName:string) {

    let tooken: number = Math.random() * 1000
    if (location === 'local') {
      return localStorage.setItem('tooken', tooken.toString())
    }
    else {
      return sessionStorage.setItem('tooken', tooken.toString())
    }


  }

  public logOut() {
    return localStorage.removeItem('tooken')

  }
}
