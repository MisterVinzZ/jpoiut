import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private isAdminSession: boolean = false;

  setAdminSession(isAdmin: boolean): void {
    this.isAdminSession = isAdmin;
  }

  getAdminSession(): boolean {
    return this.isAdminSession;
  }
}
