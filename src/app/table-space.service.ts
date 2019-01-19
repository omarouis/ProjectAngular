import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http , HttpModule} from '@angular/http';
import "rxjs/add/operator/map";

@Injectable()
export class TableSpaceService {

  private url = 'http://localhost:3000/tablespace';

  constructor(public http: Http ) { }

  getTableSpace() {

     return this.http.get(this.url).map(res=>res.json());
  }
}
