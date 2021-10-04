import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SedeComponent } from './sede/sede.component';

import { AppRoutingModule } from '../app-routing.module';


@NgModule({
  declarations: [
    LoginComponent, 
    RegisterComponent, 
    SedeComponent
  ],
  exports: [
    LoginComponent, 
    RegisterComponent
  ],
  imports: [
    CommonModule, 
    AppRoutingModule
  ],
})
export class AuthModule {}
