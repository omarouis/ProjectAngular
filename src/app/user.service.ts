import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http , HttpModule} from '@angular/http';
import "rxjs/add/operator/map";
import { map } from 'rxjs/operators/map';
import { observableToBeFn } from 'rxjs/testing/TestScheduler';

@Injectable()
export class UserService {
  private url = 'http://localhost:3000/user_profiles';

  constructor(public http: Http ) { }

  getUser() {

     return this.http.get(this.url).map(res=>res.json());
  }
  addUser(user){
      console.log(user);
      return this.http.post('http://localhost:3000/user_profiles/add',user).map(res=>res.json).subscribe(res =>
          console.log('Done'));
  }
  UpdateUser(user){
    console.log(user);
    return this.http.put('http://localhost:3000/user_profiles/:user_name',user).map(res=>res.json).subscribe(res =>
        console.log('Done'));
}

  getUserProfiles(id:string){
    return this.http.get('http://localhost:3000/user_profiles/:id').map(res=>res.json());
  }

  deleteUser(user_name) {
    console.log(user_name);
    return this.http.delete('http://localhost:3000/user_profiles/:user_name').map(res=>res.json());
 }

}
