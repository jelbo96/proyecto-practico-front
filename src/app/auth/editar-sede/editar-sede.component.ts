import { Component, OnInit } from '@angular/core';

import { SedesService } from 'src/app/services/sedes.service';
import { Sede } from 'src/app/interfaces/sede.interface';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-sede',
  templateUrl: './editar-sede.component.html',
  styleUrls: ['./editar-sede.component.css'],
})
export class EditarSedeComponent implements OnInit {
  nombre: string = '';
  direccion: string = '';
  comuna: string = '';
  region: string = '';
  telefono: number = 56;
  correo: string = '';
  img: string = '';

  mensaje_nombre = '';
  mensaje_direccion = '';
  mensaje_comuna = '';
  mensaje_region = '';
  mensaje_telefono = '';
  mensaje_correo = '';

  sede: any; /* Sede = {
    nombre: '',
    direccion: '',
    comuna: '',
    region: '',
    telefono: 56,
    correo: '',
    img: '',
  }; */
  id: number = 0;

  constructor(
    public activatedRoute: ActivatedRoute,
    public router: Router,
    public sedeService: SedesService
  ) {}

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];

    console.log('Obteniendo sede', this.id);

    /* this.sede = {
      nombre: 'Ignacio Jelvez',
      direccion: 'Segunda Faja',
      comuna: 'Villarrica',
      region: 'Araucania',
      telefono: 56999578987,
      correo: 'ijelvezh@gmail.com',
      img: '',
    }; */

    this.sede = this.sedeService.get(this.id).subscribe(
      (data: any) => {
        console.log(data);
        this.sede = data;
      },
      (error: any) => {
        console.log(error);
      }
    );

    /* TODO Aqui deberiamos llamar al service para que nos traiga los datos de la sede */
    /* this.sede = this.sedeService.getSede(this.id); */
  }

  saveSede() {
    console.log('Guardando sede', this.sede);

    this.sedeService.update(this.id, this.sede).subscribe(
      (res) => {
        console.log(res);
        this.router.navigate(['/sede']);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  validarEnvio(): void {
    if (
      this.validarNombre() &&
      this.validarDireccion() &&
      this.validarComuna() &&
      this.validarRegion() &&
      this.validarTelefono() &&
      this.validarCorreo()
    ) {
      console.log('Nombre: ' + this.sede.nombre);
      console.log('Direccion: ' + this.sede.direccion);
      console.log('Comuna: ' + this.sede.comuna);
      console.log('Region: ' + this.sede.region);
      console.log('Telefono: ' + this.sede.telefono);
      console.log('Correo: ' + this.correo);
      this.saveSede();
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
