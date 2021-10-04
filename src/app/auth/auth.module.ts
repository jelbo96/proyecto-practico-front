import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SedeComponent } from './sede/sede.component';


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
    AppRoutingModule,
    FormsModule
  ],
})
export class AuthModule {}
