import {Injectable} from "@angular/core";
import {Http, Response, Headers} from "@angular/http";
import 'rxjs/Rx'
import {Observable} from "rxjs/Rx";
@Injectable()

export class GithubService {
 
    private username:string;
    private client_id = 'eae5ba2312321c4c3d9d';
    private client_secret = '6dbde923f0aa3170bfcba9a4e65434a5f417080c';

    /**
     * @param http
     */
    constructor(private http:Http) {
        console.log("ready ...");
        this.username = "BERRAMOU";

    }

    getUser():Observable<any> {

        return this.http.get("http://api.github.com/users/" + this.username + '?client_id=' + this.client_id + '&client_secret=' + this.client_secret)
            .map(
                (response:Response) => {
                    return response.json();
                }
            );
    }

    getRepos():Observable<any> {

        return this.http.get("http://api.github.com/users/" + this.username + '/repos?client_id=' + this.client_id + '&client_secret=' + this.client_secret)
            .map(
                (response:Response) => {
                    return response.json();
                }
            );
    }

    updateUser(username:string) {
        this.username = username;
        console.log("user updated " + username);
    }


}