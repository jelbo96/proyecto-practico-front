import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SedeComponent } from './sede/sede.component';
import { RecaptchaModule, RecaptchaFormsModule } from 'ng-recaptcha';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    SedeComponent,
    HomeComponent,
  ],
  exports: [LoginComponent, RegisterComponent],
  imports: [
    CommonModule,
    FormsModule,
    RecaptchaModule,
    AppRoutingModule,
    RecaptchaFormsModule,
  ],
})
export class AuthModule {}
