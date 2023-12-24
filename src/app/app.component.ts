import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './main.app.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
currentLetter: any;
isGameStarted: any;
userGuess: any;
registerPassword: any;
loginPassword: any;
makeGuess() {
throw new Error('Method not implemented.');
}
isGameOver: any;
toggleRegistration() {
throw new Error('Method not implemented.');
}
register() {
throw new Error('Method not implemented.');
}
loginUsername: any;
login() {
throw new Error('Method not implemented.');
}
isLoggedIn: any;
isRegistering: any;
  title // Oyun başlatma işlemlerini gerçekleştirin
    (title: any) {
      throw new Error('Method not implemented.');
  }
  // Bu alanda kullanılacak değişkenleri tanımlayabilirsiniz
  username: string = '';
  guess: string = '';
  score: number = 0;

  registerUser() {
    // Kullanıcı kayıt işlemlerini gerçekleştirin
    if (this.username.trim() !== '') {
      // Kullanıcı adı kontrolü
      console.log(`Kullanıcı kaydedildi: ${this.username}`);
    } else {
      console.log('Lütfen geçerli bir kullanıcı adı girin.');
    }
  }

  startGame() {
    // Oyun başlatma işlemlerini gerçekleştirin
    console.log('Oyun başlatıldı');
  }

  submitGuess() {
    // Tahmin gönderme işlemlerini gerçekleştirin
    if (this.guess.trim() !== '') {
      // Tahmin kontrolü
      console.log(`Tahmin gönderildi: ${this.guess}`);
    } else {
      console.log('Lütfen geçerli bir tahmin girin.');
    }
  }
}
