import { Component, OnInit, Input } from '@angular/core';
import { Animal } from '../models/animal';
import { AnimalService } from '../services/animal.service';
import { NgForm} from '@angular/forms';
import { Router} from '@angular/router';
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() animal: Animal;
  constructor(private animalService: AnimalService, private router:Router) {}

  ngOnInit() {
    console.log(this.animal);
  }

  onSubmit(editForm : NgForm){
   console.log(this.animal); 
   
   this.animalService.updateAnimal(this.animal).subscribe();
  
  }
  yesClicked(){
    this.animalService.deleteAnimal(this.animal.AnimalId).subscribe();

    location.reload();
  }
}
