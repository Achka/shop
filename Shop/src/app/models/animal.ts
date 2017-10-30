import { Photo } from './photo' 
export class Animal{

    constructor(){
        this.Breed = "";
        this.Description ="";
        this.Age = 0;
        this.Price = 0;
      
    }
    AnimalId: number;
    Breed: string;
    Age: number;
    Description: string;
    AnimalPhoto: Photo;
    Price: number;
}