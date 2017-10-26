import { Http, Headers} from '@angular/http';
export class HttpVariables{
    url = "http://localhost:62904";
    getAuthorizationHeader(token:string): Headers{
        return new Headers({'Authorization': `bearer ${token}`});
    }
}