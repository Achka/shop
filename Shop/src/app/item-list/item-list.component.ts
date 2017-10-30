import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { NgForm} from '@angular/forms';

import { Animal} from '.././models/animal';
import { Photo }from '.././models/photo';
import { User} from '.././models/user';
import {AnimalService } from '.././services/animal.service';
import {UserService } from '.././services/user.service';
@Component({
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  animals :Animal[];
  currentUser: User;
  price:number;
  constructor(private _router: Router, private animalService: AnimalService, private userService: UserService) {
    if(localStorage.length === 0){
      _router.navigateByUrl("/login");
    }
    
   }
  ngOnInit() {
    this.animalService.getAllAnimals().subscribe(animals =>this.animals = animals);
     this.userService.getcCurrentUser().subscribe(user=>{
       this.currentUser = user;
       if(this.currentUser.Animals===null || this.currentUser.Animals===undefined){
       this.currentUser.Animals = new Array();
     }
     this.price = this.findFullPrice();
      });
     console.log(this.currentUser);
  } 
  onSubmit(addForm : NgForm){ 
    let animalToAdd:Animal = new Animal(); 
    animalToAdd.Breed = addForm.value.breed;
    animalToAdd.Description = addForm.value.description;
    this.animalService.addAnimal(animalToAdd).subscribe(()=>location.reload());
   }

   logOut(){
     localStorage.clear();
     this._router.navigateByUrl("/login");
   }

   findFullPrice(){
     let sum =0;
     this.currentUser.Animals.forEach(animal => {
       if(animal.Price!==null){
        sum = sum + animal.Price;
       }
     });
     return sum;
   }
   removeItem(animal){
     this.userService.deleteAnimal(animal).subscribe(()=>location.reload());
   }
}