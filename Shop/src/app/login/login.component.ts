import { Component, OnInit } from '@angular/core';
import { NgForm} from '@angular/forms';
import { Http} from '@angular/http';
import { Headers } from '@angular/http';
import { Router} from '@angular/router';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  constructor(private _http:Http, private _router: Router) { }
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
    this._http.post('http://localhost:62904/Token',body)
    .subscribe(
      function(resp:any)
      {
        localStorage.setItem("token",resp.json().access_token.toString());
        console.log(resp);
        console.log(localStorage);
      },
      function(err){
        console.log(err);
      }
    );
    this._router.navigate(['/shop']);
  }
 
}
