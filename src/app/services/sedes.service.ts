import { Injectable } from '@angular/core';


import { HttpClient } from '@angular/common/http';
import { Sede } from '../interfaces/sede.interface';

const baseUrl = 'http://localhost:8080/api'

@Injectable({
  providedIn: 'root'
})
export class SedesService {

  //Declaracion de variables
  sedes: Sede[] = [];

  constructor(private http: HttpClient) {
    /* console.log('SedesService constructor');
    this.getAll(); */
  }

  getAll() {
    return this.http.get('assets/data/sedes-prueba.json');
  }

  get(id: number){
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data : any){
    return this.http.post(baseUrl, data); 
  }

  update(id: number, data: any){
    return this.http.put(`${baseUrl}/${id}`,data);
  } 

  delete(id: number){
    return this.http.delete(`${baseUrl}/${id}`);
  }


}



