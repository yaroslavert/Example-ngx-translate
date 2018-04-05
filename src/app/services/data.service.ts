import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { DataResponce } from '../interfaces/data';
import { Item } from '../interfaces/item';


@Injectable()
export class DataService {

  constructor(public http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get('/assets/data/data.json')
      .map((res: DataResponce) => {
        let list: Item[] = [];
        if (res.success) {
          list = res.list;
        }
        return list;
      });
  }

}
