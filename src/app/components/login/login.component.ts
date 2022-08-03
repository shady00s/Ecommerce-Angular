import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login/login.service';
import { Iuser } from './../../models/iuser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LogInComponent implements OnInit {
  email: string = ''
  password: string = ''
  rememberMe: boolean = false

  constructor(private dataService: LoginService,private router:Router) {

  }

  ngOnInit(): void {
  }

  test() {
    this.dataService.getloginuserData.subscribe(element => {
      let resultUser: Iuser[] = element.filter(user => user.password == this.password && user.useremail == this.email)
      if (resultUser.length !== 0) {
        console.log('exist')
        this.router.navigate(['/'])
        if (this.rememberMe) {
          this.dataService.saveLogInData('local',resultUser[0].userName)
        }
        else {
          this.dataService.saveLogInData('session',resultUser[0].userName)
        }
       
      }
      else {

        alert('there is no user')
      }

    })


  }

}