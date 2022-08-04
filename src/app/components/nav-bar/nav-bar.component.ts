import { Component, OnInit, OnChanges, SimpleChanges, AfterViewChecked, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { fromEvent ,delay} from 'rxjs';
import { CartService } from './../../services/cart/cart.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit  ,AfterViewChecked{
  
  x:number[] | null = []
  
index:number  = 0
logOut:boolean = false
openLogOutPopup:boolean = false
userName:string | null =""
  constructor(private router:Router,private cd:ChangeDetectorRef) {
  
   }

contianerPopUp (){
  return this.openLogOutPopup = !this.openLogOutPopup
}
  
  ngAfterViewChecked(): void {
    this.x =[... JSON.parse(localStorage.getItem("cart-items")|| '' )] 
    this.index = this.x.length
    this.cd.detectChanges()
  }

  ngOnInit(): void {
    
    this.x =[... JSON.parse(localStorage.getItem("cart-items") || '' )] 
    this.index = this.x.length
   
  }
    
  logOutFunc(){
   let log = confirm("Do u want to log-out ?")

    if(log =true){

      localStorage.removeItem('tooken')
      this.router.navigate([''])
    }
  }
 

  loginVerificator(){
    let token = localStorage.getItem('tooken')

    if(!token){
      this.router.navigate(['login'])
      this.userName = "user"
    }
    else{

      
     let name = localStorage.getItem('user-name')
     this.userName = name
      this.logOut = true
      this.contianerPopUp()
    }
  }
}
