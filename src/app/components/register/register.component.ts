import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from 'src/app/services/register/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  ResgistrationForm:FormGroup
  constructor(private formBuilder:FormBuilder,private registerService:RegisterService) {
    this.ResgistrationForm = this.formBuilder.group({
        userName:['',[Validators.required,Validators.maxLength(6)]],
        useremail:['',[Validators.required,Validators.email]],
        password:['',[Validators.required,Validators.minLength(8)]],
        rememberMe:[null,[]]
    })
   }


   get userName(){
    return this.ResgistrationForm.get('userName')
   }
   get useremail(){
    return this.ResgistrationForm.get('useremail')
   }

   get password(){
    return this.ResgistrationForm.get('password')
   }

   get rememberMe(){
    return this.ResgistrationForm.get('rememberMe')
   }

   onSubmit(){
    if(this.ResgistrationForm.valid){
      this.registerService.postUserData(this.ResgistrationForm.value).subscribe(user=>alert("user created succsessfully"))
    }else{
      alert(this.ResgistrationForm.errors)
    }
   }
  ngOnInit(): void {
  }
  
}
