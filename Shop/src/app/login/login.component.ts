import { Component, OnInit } from '@angular/core';
import { NgForm} from '@angular/forms';
import { Http} from '@angular/http';
import { Headers } from '@angular/http';
import { Router} from '@angular/router';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  constructor(private _http:Http, private _router: Router) { 
    localStorage.clear();
  }
  onSubmit(loginForm : NgForm){
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    var token={
      grant_type:'password',
       username:loginForm.value.username,
       password:loginForm.value.password
    }
    console.log(token);
    let data = new URLSearchParams();
    data.append('grant_type','password');
    data.append('username', token.username);
    data.append('password', token.password);
    let body = 'grant_type='+'password' +'&username=' +token.username +'&password='+token.password;
    this._http.post('http://localhost:62904/Token',body).map(resp=>{localStorage.setItem("token",resp.json().access_token.toString());})
    .subscribe(()=>
       this._router.navigateByUrl('/shop')
    ); 
  }
}