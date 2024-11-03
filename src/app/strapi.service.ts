import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StrapiService {
  private apiUrl = 'http://localhost:1337/api';

  constructor(private http: HttpClient) {}

  getHotels(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/hotels?populate=*`);
  }
  getDestinations(): Observable<any>{
    return this.http.get<any>(`${this.apiUrl}/destinations?populate=*`)
  }
}
