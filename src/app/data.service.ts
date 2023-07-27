import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Person {
  id: number;
  name: string;
}

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getPeople(): Observable<Person[]> {
    return this.http.get<Person[]>(`${this.apiUrl}/people`);
  }

  addPerson(name: string): Observable<Person> {
    return this.http.post<Person>(`${this.apiUrl}/people`, { name });
  }

  removePerson(id: number): Observable<{}> {
    return this.http.delete<{}>(`${this.apiUrl}/people/${id}`);
  }

  getFavorites(): Observable<Person[]> {
    return this.http.get<Person[]>(`${this.apiUrl}/favorites`);
  }

  addFavorite(name: string): Observable<Person> {
    return this.http.post<Person>(`${this.apiUrl}/favorites`, { name });
  }

  removeFavorite(id: number): Observable<{}> {
    return this.http.delete<{}>(`${this.apiUrl}/favorites/${id}`);
  }
}
