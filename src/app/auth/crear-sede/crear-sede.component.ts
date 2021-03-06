import { Component } from '@angular/core';
import { SedesService } from '../../services/sedes.service';
import { Sede } from 'src/app/interfaces/sede.interface';

import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-sede',
  templateUrl: './crear-sede.component.html',
  styleUrls: ['./crear-sede.component.css'],
})
export class CrearSedeComponent {
  nombre: string = '';
  direccion: string = '';
  comuna: string = '';
  region: string = '';
  telefono: number = 56;
  correo: string = '';
  img: string = '';

  sede: Sede = {
    nombre: '',
    direccion: '',
    comuna: '',
    region: '',
    telefono: 56,
    correo: '',
    img: '',
  };

  mensaje_nombre = '';
  mensaje_direccion = '';
  mensaje_comuna = '';
  mensaje_region = '';
  mensaje_telefono = '';
  mensaje_correo = '';
  mensaje_img = '';

  constructor(public sedesService: SedesService, public router: Router) {}

  /* Funcion para guardar datos */

  /* Funcion para validar nombre 

  ngOnInit(): void {
  }*/

  addSede() {
    console.log(this.sede);
    this.sedesService.create(this.sede).subscribe(
      (response) => {
        console.log(response);
        this.router.navigate(['/sede']);
      },
      (error) => console.log(error)
    );
  }

  //validaciones

  validarEnvio(): void {
    if (
      this.validarNombre() &&
      this.validarDireccion() &&
      this.validarComuna() &&
      this.validarRegion() &&
      this.validarTelefono() &&
      this.validarCorreo() &&
      this.validarImg()
    ) {
      console.log('Nombre: ' + this.sede.nombre);
      console.log('Direccion: ' + this.sede.direccion);
      console.log('Comuna: ' + this.sede.comuna);
      console.log('Region: ' + this.sede.region);
      console.log('Telefono: ' + this.sede.telefono);
      console.log('Correo: ' + this.correo);
      this.addSede();
    }
  }

  validarNombre(): boolean | undefined {
    if (this.sede.nombre?.trim().length == 0) {
      this.mensaje_nombre = 'El campo Nombre no puede estar vacio';
      return false;
    } else {
      this.mensaje_nombre = '';
      return true;
    }
  }

  validarDireccion(): boolean | undefined {
    if (this.sede.direccion?.trim().length == 0) {
      this.mensaje_direccion = 'El campo Direccion no puede estar vacio';
      return false;
    }
    this.mensaje_direccion = '';
    return true;
  }

  validarComuna(): boolean | undefined {
    if (this.sede.comuna?.trim().length == 0) {
      this.mensaje_comuna = 'El campo Comuna no puede estar vacio';
      return false;
    }
    this.mensaje_comuna = '';
    return true;
  }

  validarRegion(): boolean | undefined {
    if (this.sede.region?.trim().length == 0) {
      this.mensaje_region = 'El campo Region no puede estar vacio';
      return false;
    }
    this.mensaje_region = '';
    return true;
  }

  validarImg(): boolean | undefined {
    if (this.sede.img?.trim().length == 0) {
      this.mensaje_img = 'El campo Url Imagen no puede estar vacio';
      return false;
    }
    this.mensaje_img = '';
    return true;
  }

  validarTelefono(): boolean | undefined {
    if (this.sede.telefono?.toString.length == 0) {
      this.mensaje_telefono = 'El campo telefono no puede estar vacio';
      return false;
    }
    this.mensaje_telefono = '';
    return true;
  }

  validarCorreo(): boolean | undefined {
    var pattern = new RegExp(
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );

    if (!pattern.test(this.sede.correo)) {
      this.mensaje_correo = 'Caracteres del correo invalido';
      console.log('Correo invalido: ' + this.sede.correo);
      return false;
    } else if (this.sede.correo.trim().length == 0) {
      this.mensaje_correo = 'El campo Correo no puede estar vacio';
      return false;
    } else {
      this.mensaje_correo = '';
      return true;
    }
  }
}
