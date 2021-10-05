import { Component, OnInit } from '@angular/core';

import { SedesService } from '../../services/sedes.service';
import { Sede } from 'src/app/interfaces/sede.interface';
@Component({
  selector: 'app-sede',
  templateUrl: './sede.component.html',
  styleUrls: ['./sede.component.css'],
})
export class SedeComponent implements OnInit {
  sedes: any;
  mode: String = 'list';

  constructor(public sedesService: SedesService) {}

  ngOnInit(): void {
    this.getSedes();
  }

  setViewMode(mode: String) {
    this.mode = mode;
  }

  getSedes() {
    this.sedesService.getAll().subscribe(
      (data: any) => {
        this.sedes = data.sedes;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
