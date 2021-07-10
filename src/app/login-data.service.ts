import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { dataInterface } from './models';

@Injectable()
export class LoginDataService {

  private _url:string = '/assets/data/myData.json';

  constructor(private http: HttpClient) {
    
   }

   getData(): Observable<dataInterface[]>{

    return this.http.get<dataInterface[]>(this._url);
  }
}
