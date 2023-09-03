import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  private userData: any = {}; // Objeto para almacenar los datos del usuario

  constructor() {}

  setUserData(data: any) {
    this.userData = data;
  }

  getUserData() {
    return this.userData;
  }
}
