// src/app/admin-auth.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { MonApiService } from './services/mon-api.service'; 
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AdminAuthGuard implements CanActivate {
  constructor(private monApiService: MonApiService, private router: Router) {}
  canActivate(): Observable<boolean> {
    return this.monApiService.isAdminSession().pipe(
      tap((isAdminSession) => {
        if (!isAdminSession) {
          // Rediriger vers la page de connexion si l'utilisateur n'est pas en session admin
          this.router.navigate(['/page-connexion']);
        }
      })
    );
  }
}
// fonctionnalité d'Angular qui permet de contrôler l'accès aux différentes routes de l'application. 
//il pourrait être utilisé pour s'assurer que seuls les utilisateurs en session admin ont accès à certaines parties de l'application, par exemple la page d'administration.