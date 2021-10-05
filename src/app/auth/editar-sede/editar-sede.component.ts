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
    /* this.sede = this.sedeService.getSede(this.id); */

    /* TODO Aqui deberiamos llamar al service para que nos traiga los datos de la sede */
  }
}
