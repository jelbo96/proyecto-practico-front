import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
const baseUrl = 'http://localhost:8080';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  login(correo: string, contrasena: string) {
    console.log('intentando loguearse', correo, contrasena);

    return this.http.get(
      `${baseUrl}/ingresar?correo=${correo}&contrasena=${contrasena}`,
      {}
    );
  }
}
