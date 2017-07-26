import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ApiService {
  constructor(private http: Http) {}
  testApiCall(): Observable<string> {

    return this.http
      .get('/api')
      .map((res:Response) => {
        return res.json().text;
      });
    
    /*
    return new Promise((resolve) => {
      setTimeout(() => resolve("promise delayed"), 2000);
    });*/
  }
}
