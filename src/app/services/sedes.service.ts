import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Sede } from '../interfaces/sede.interface';

const baseUrl = 'http://localhost:8080';

@Injectable({
  providedIn: 'root',
})
export class SedesService {
  //Declaracion de variables
  sedes: Sede[] = [];

  constructor(private http: HttpClient) {
    /* console.log('SedesService constructor');
    this.getAll(); */
  }

  getAll() {
    return this.http.get(`${baseUrl}/getSedes`);
  }

  get(id: number) {
    return this.http.get(`${baseUrl}/sede/${id}`);
  }

  create(data: any) {
    return this.http.post(`${baseUrl}/agregarSede`, data);
  }

  update(id: number, data: any) {
    console.log('ACTUALIZANDO....', data, id);
    data.id = id;
    return this.http.put(`${baseUrl}/actualizar`, data);
  }

  delete(id: number) {
    return this.http.get(`${baseUrl}/eliminar/${id}`);
  }
}
