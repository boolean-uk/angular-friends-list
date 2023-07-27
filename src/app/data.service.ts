import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getPeople(): Observable<string[]> {
    return this.http.get<string[]>(`${this.apiUrl}/people`);
  }

  addPerson(name: string): Observable<string> {
    return this.http.post<string>(`${this.apiUrl}/people`, { name });
  }

  getFavorites(): Observable<string[]> {
    return this.http.get<string[]>(`${this.apiUrl}/favorites`);
  }

  addFavorite(name: string): Observable<string> {
    return this.http.post<string>(`${this.apiUrl}/favorites`, { name });
  }

  removeFavorite(name: string): Observable<string> {
    return this.http.delete<string>(`${this.apiUrl}/favorites/${name}`);
  }
}
