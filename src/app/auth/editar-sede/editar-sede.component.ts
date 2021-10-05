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
  mensaje_nombre = '';
  mensaje_direccion = '';
  mensaje_comuna = '';
  mensaje_region = '';
  mensaje_telefono = '';
  mensaje_email = '';

  sede: Sede = {
    nombre: '',
    direccion: '',
    comuna: '',
    region: '',
    telefono: 56,
    email: '',
    img: '',
  };
  id: number = 0;

  constructor(
    public activatedRoute: ActivatedRoute,
    public router: Router,
    public sedeService: SedesService
  ) {}

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];

    console.log('Obteniendo sede', this.id);

    this.sede = {
      nombre: 'Ignacio Jelvez',
      direccion: 'Segunda Faja',
      comuna: 'Villarrica',
      region: 'Araucania',
      telefono: 56999578987,
      email: 'ijelvezh@gmail.com',
      img: '',
    };

    /* TODO Aqui deberiamos llamar al service para que nos traiga los datos de la sede */
    /* this.sede = this.sedeService.getSede(this.id); */
  }

  saveSede() {
    console.log('Guardando sede', this.sede);

    this.sedeService.update(this.id, this.sede).subscribe(
      (res) => {
        console.log(res);
        this.router.navigate(['/sedes']);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
