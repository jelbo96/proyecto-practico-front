import { Component} from '@angular/core';
import {SedesService} from '../../services/sedes.service';
import { Sede } from 'src/app/interfaces/sede.interface';

@Component({
  selector: 'app-crear-sede',
  templateUrl: './crear-sede.component.html',
  styleUrls: ['./crear-sede.component.css']
})
export class CrearSedeComponent {

  nombre: string = "";
  direccion: string = "";
  comuna: string ="";
  region: string = "";
  telefono: number = 56;
  email: string = "";
  img: string  ="";
  sede : Sede = {
    nombre:  "",
    direccion:  "",
    comuna: "",
    region:  "",
    telefono:  56,
    email:  "",
    img: ""
  }

  mensaje_nombre="";
  mensaje_direccion="";
  mensaje_comuna="";
  mensaje_region="";
  mensaje_telefono="";
  mensaje_email="";

  constructor(public sedesService: SedesService) {
  
  }

  /* Funcion para guardar datos */
  


  /* Funcion para validar nombre 

  ngOnInit(): void {
  }*/


  addSede(){
    console.log(this.sede);
    this.sedesService.create(this.sede).subscribe(
      (response) => {
        console.log(response)
      },
      error => console.log(error)
    )

  }




}
