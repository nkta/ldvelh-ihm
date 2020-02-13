import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class CollectionMenuService {

  constructor(private http: HttpClient) { }
  getListeCollection(): Observable<any> {
    return this.http.get('//localhost:8080/ldvelh/listeCollection');
  }

  getListeLivre(collection : string): Observable<any> {
    return this.http.get('//localhost:8080/ldvelh/listeLivre/'+collection);
  }
}
