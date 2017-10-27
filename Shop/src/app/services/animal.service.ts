import { Injectable } from '@angular/core';
import { Animal } from '.././models/animal';
import { HttpVariables } from '.././globals/http';
import { Http, Headers,RequestOptions,Response} from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
@Injectable()
export class AnimalService {
    animals:Animal[];
    globals: HttpVariables;
    token: string;
    options :RequestOptions; 
    constructor(private http: Http){
        this.globals = new HttpVariables();
        this.token = localStorage.getItem("token");
        this.options = new RequestOptions({ headers: this.globals.getAuthorizationHeader(this.token) });
    }
    getAllAnimals():Observable<Animal[]>{
 

        return this.http
        .get(this.globals.url+ '/api/Animal',this.options).map(function(res:Response)
        {let body = res.json();
            console.log(body);
            return body || {};
        });
    }

    updateAnimal(animal:Animal){
        return this.http.post(this.globals.url+'/api/Animal/Update',animal,this.options).map(function(resp:Response){
            return resp.json();
        });
    }
    
    deleteAnimal(id:number){
        return this.http.delete(this.globals.url+'/api/Animal'+id,this.options).map(function(resp:Response){
            return resp.json();});
    }
    addAnimal(animal:Animal){
        return this.http.post(this.globals.url+'/api/Animal/Add',animal,this.options).map(function(resp:Response){
            return resp.json();
        });
    }
}