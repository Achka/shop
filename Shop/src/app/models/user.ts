import { Animal } from "./animal";
export class User{
    User(username:string, roles:string[], animals: Animal[]){
        this.username = username;
        this.roles = roles;
    }
    username : string;
    roles : string[];
    Animals: Animal[];
}