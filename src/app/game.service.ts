import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private apiUrl = 'http://localhost:8080/api/game'; // Backend URL

  constructor(private http: HttpClient) { }

  // Oyun ile ilgili metotlar buraya eklenebilir

  saveScore(userId: number, points: number): Observable<void> {
    const scoreRequest = { userId, points };
    return this.http.post<void>(`${this.apiUrl}/saveScore`, scoreRequest);
  }

  startGame(): Observable<string> {
    // Örnek: Oyun başlatma isteği gönderildiğinde, oyunun başlangıç durumunu sunucudan almak için HTTP GET isteği yapılır.
    return this.http.get<string>(`${this.apiUrl}/startGame`);
  }

  stopGame(): Observable<string> {
    // Örnek: Oyunu durdurma isteği gönderildiğinde, oyunun son durumunu sunucudan almak için HTTP GET isteği yapılır.
    return this.http.get<string>(`${this.apiUrl}/stopGame`);
  }
}
