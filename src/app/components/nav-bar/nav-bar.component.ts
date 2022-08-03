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
  
  x:number[] |undefined = []
  
index:number = 0
userName:string | null =""
  constructor(private router:Router,private cd:ChangeDetectorRef) {
   
    
    
  
   }
  ngAfterViewChecked(): void {
    this.x =[... JSON.parse(localStorage.getItem("cart-items")!)] 
    this.index = this.x.length
    this.cd.detectChanges()
  }

  ngOnInit(): void {
    
    this.x =[... JSON.parse(localStorage.getItem("cart-items")!)] 
    this.index = this.x.length
   
  }
    
  
 

  loginVerificator(){
    let token = localStorage.getItem('tooken')

    if(!token){
      this.router.navigate(['login'])
      this.userName = "user"
    }
    else{

      this.router.navigate([''])
     let name = localStorage.getItem('user-name')
     this.userName = name
    }
  }
}
