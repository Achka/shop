import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

import { Animal} from '.././models/animal';
import {AnimalService } from '.././services/animal.service';
@Component({
  //selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  animals :Animal[];
  constructor(_router: Router, private animalService: AnimalService) {
    if(localStorage.getItem("token") === undefined){
      _router.navigateByUrl("/login");
    }
   }
  ngOnInit() {

    this.animals = this.animalService.get();
   //nwhile(this.animals === undefined){}
   console.log(this.animals);
}
  getAllAnimals():Animal[]{
    // this.http
    // .get("http://localhost:62904/api/Animal",{
    //   headers: new HttpHeaders().set('Authorization', `bearer ${localStorage.getItem("token")}`),
    // })
    // .subscribe(
    //   function(resp){
    //     console.log(resp);
    //     this.animals = resp;
    //     console.log(this.animals);
    //   },
    //   function(err){
    //     console.log(err)
    //   }
    // );
    return this.animals;
  }

  

}
