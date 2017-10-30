import { Component, OnInit } from '@angular/core';
import { NgForm} from '@angular/forms';
import { Http} from '@angular/http';
import { HttpVariables } from '.././globals/http';
import { Router} from '@angular/router';
import { Register} from ".././models/register";
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  email:string;
  password:string;
  globals: HttpVariables;
  constructor(private http:Http, private router:Router) { 
            this.globals = new HttpVariables();
  }

   onSubmit(loginForm : NgForm){
      let register = new Register();
      register.Email = loginForm.value.username,
      register.Password = loginForm.value.password,
      this.http.post(this.globals.url+'/api/Account/Register',register).map(()=>{}).subscribe(()=>{let body = 'grant_type='+'password' +'&username=' +register.Email +'&password='+register.Password;
    this.http.post('http://localhost:62904/Token',body).map(resp=>{localStorage.setItem("token",resp.json().access_token.toString());})
    .subscribe(()=>
       this.router.navigateByUrl('/shop')
    ); });
     
    
   }

}
