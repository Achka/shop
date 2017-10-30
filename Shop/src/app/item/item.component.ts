import { Component, OnInit, Input } from '@angular/core';
import { Animal } from '../models/animal';
import { User } from '../models/user';
import { AnimalService } from '../services/animal.service';
import { UserService } from '../services/user.service';
import { NgForm} from '@angular/forms';
import { Router} from '@angular/router';
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() animal: Animal;
  @Input() currentUser:User;
  constructor(private animalService: AnimalService, private router:Router, private userService: UserService) {}

  ngOnInit() {
    console.log(this.animal);
    console.log(this.currentUser);
  }

  onSubmit(editForm : NgForm){
   this.animalService.updateAnimal(this.animal).subscribe(()=>location.reload());
  
  }
  yesClicked(){
    this.animalService.deleteAnimal(this.animal.AnimalId).subscribe(()=>location.reload());  
  }

  add(){
    this.userService.addAnimal(this.animal).subscribe(()=>location.reload()); 
  }
}
