import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { NgForm} from '@angular/forms';

import { Animal} from '.././models/animal';
import { Photo }from '.././models/photo';
import {AnimalService } from '.././services/animal.service';
@Component({
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
    this.animalService.getAllAnimals().subscribe(animals =>this.animals = animals);
  } 
  onSubmit(addForm : NgForm){ 
    let animalToAdd:Animal = new Animal(); 
    animalToAdd.Breed = addForm.value.breed;
    animalToAdd.Description = addForm.value.description;
    this.animalService.addAnimal(animalToAdd).subscribe();
    this.ngOnInit();
   }
}
