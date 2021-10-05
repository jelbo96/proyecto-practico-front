import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  nombre = '';
  correo: string = '';
  password: string = '';
  config_password = '';

  constructor() {}

  ngOnInit(): void {}
}
