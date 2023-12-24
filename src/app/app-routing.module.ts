// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthService } from './auth.service';
import { GameService } from './game.service';

// Örnek rota tanımlamalarını buraya ekleyin
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Ana sayfa için yönlendirme
  { path: 'home', component: AuthService },
  { path: 'about', component: GameService },
  // Daha fazla rota tanımlamalarınızı ekleyin
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
