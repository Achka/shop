export class User{
    User(username:string, roles:string[]){
        this.username = username;
        this.roles = roles;
    }
    username : string;
    roles : string[];
}