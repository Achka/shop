import { Injectable } from '@angular/core';
import { Animal } from '.././models/animal';
import { User } from '.././models/user';
import { HttpVariables } from '.././globals/http';
import { Http, Headers,RequestOptions,Response} from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
@Injectable()
export class UserService{
    globals: HttpVariables;
    token: string;
    options :RequestOptions; 
    constructor(private http: Http){
        this.globals = new HttpVariables();
        this.token = localStorage.getItem("token");
        this.options = new RequestOptions({ headers: this.globals.getAuthorizationHeader(this.token) });
    }
    getcCurrentUser():Observable<User>{
        return this.http
        .get(this.globals.url+ '/api/Account/CurrentUser',this.options).map(function(res:Response)
        {let body = res.json();
            console.log(body);
            return body || {};
        });
    }

    addAnimal(animal:Animal){
        return this.http.post(this.globals.url+'/api/Account/AddAnimal',animal,this.options).map(function(resp:Response){
            return resp.json();
        });
    }
    deleteAnimal(animal:Animal){
        return this.http.post(this.globals.url+'/api/Account/RemoveFromCart',animal,this.options).map(()=>{});
    }
    
}