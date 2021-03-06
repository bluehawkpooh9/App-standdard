import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http'
import { Observable } from 'rxjs'
import 'rxjs/add/operator/map'

import { AuthenticationService } from '../_services/index'
import { User } from '../_models/user'

@Injectable()
export class UserService {

  constructor(private http: Http, private authenticationService: AuthenticationService) { }

  getUsers(): Observable<User[]> {
    console.log("=== get user ===");
    console.log(localStorage.getItem('currentUser'))
    let headers = new Headers({ 'Authorization': 'Bearer ' + this.authenticationService.token })
    let options = new RequestOptions({ headers : headers })
    // let users={user:"test"};
    // return 
    
    return this.http.get('http://localhost:8000/api/users', options).map((response: Response) => response.json())
  }
}
