import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  nombre: String | null = '';

  constructor(public router: Router) {}

  ngOnInit(): void {
    this.nombre = localStorage.getItem('nombre');
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('nombre');
    this.router.navigate(['/login']);
  }
}
