import { Injectable } from '@angular/core';
import { Animal } from '.././models/animal';
import { HttpVariables } from '.././globals/http';
import { Http, Headers,RequestOptions,Response} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
@Injectable()
export class AnimalService {
    animals:Animal[];
    globals: HttpVariables;
    token: string;
    constructor(private http: Http){
        this.globals = new HttpVariables();
        this.token = localStorage.getItem("token");
    }
    getAllAnimals(){
 
        let options = new RequestOptions({ headers: this.globals.getAuthorizationHeader(this.token) });
        this.http
        .get(this.globals.url+ '/api/Animal',options).subscribe(function(resp:any)
        {this.animals = resp.json});
       // return this.animals;
        while(this.animals === undefined){}
        return this.animals;


      
    }
        
    
    

    
    get(){
        this.getAllAnimals();
        return this.animals;
    }
}