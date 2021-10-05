import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { HomeComponent } from './auth/home/home.component';
import { SedeComponent } from './auth/sede/sede.component';
import { CrearSedeComponent } from './auth/crear-sede/crear-sede.component';
import { EditarSedeComponent } from './auth/editar-sede/editar-sede.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'sede', component: SedeComponent },
  { path: 'crear-sede', component: CrearSedeComponent },
  { path: 'editar-sede/:id', component: EditarSedeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
