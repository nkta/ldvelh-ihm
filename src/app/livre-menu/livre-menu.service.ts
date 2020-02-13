import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class LivreMenuService {

  constructor(private http: HttpClient) { }
  getListeLivre(collection : string): Observable<any> {
    return this.http.get('//localhost:8080/ldvelh/listeLivre/'+collection);
  }
}
