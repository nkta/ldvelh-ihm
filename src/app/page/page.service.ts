import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class PageService {

  constructor(private http: HttpClient) { }
  getparagraphe(titre : string, id: string): Observable<any> {
    return this.http.get('//localhost:8080/ldvelh/'+titre+'/'+id);
  }
}
