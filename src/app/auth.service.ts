// auth.service.ts

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/api/auth'; // Backend URL
  private isLoggedIn = false;

  constructor(private http: HttpClient) { }

  register(user: User): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}/register`, user);
  }

  login(username: string, password: string): Observable<boolean> {
    const credentials = btoa(`${username}:${password}`);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Basic ${credentials}`
      })
    };

    return this.http.post<any>(`${this.apiUrl}/login`, {}, httpOptions)
      .pipe(
        map(response => {
          // Kullanıcı başarıyla giriş yaptıysa
          this.isLoggedIn = true;
          return true;
        }),
        catchError(error => {
          // Hata durumunda
          console.error('Login error:', error);
          return of(false);
        })
      );
  }

  // Diğer gerekirse metotlar...
}
