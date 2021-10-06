import { Component } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  correo: string = '';
  password: string = '';

  mensaje_correo = '';
  mensaje_password = '';
  string_captcha = '';
  string_credenciales = '';
  constructor(public loginService: LoginService, public router: Router) {}

  ngOnInit(): void {}

  insertarLogin(): void {
    if (
      this.validarCorreo() &&
      this.validarPass() &&
      this.string_captcha.length > 0
    ) {
      console.log('Correo: ' + this.correo, 'Pass: ' + this.password);

      /* Loguearse - llamaR AL SERVICE Y PASARLE CORREO Y PASS */
      this.loginService.login(this.correo, this.password).subscribe(
        (data: any) => {
          if (data) {
            localStorage.setItem('token', data.token);
            localStorage.setItem(
              'nombre',
              data.usuario.nombre + ' ' + data.usuario.apellido
            );
            this.router.navigate(['/home']);
          } else {
            this.string_credenciales = 'Credenciales incorrectas';
          }
        },
        (error) => {
          this.string_credenciales = 'Credenciales incorrectas';
          console.log(error);
        }
      );
    }
  }

  validarCorreo(): boolean | undefined {
    var pattern = new RegExp(
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
    if (this.correo.trim().length == 0) {
      this.mensaje_correo = 'El campo Correo no puede estar vacio';
      return false;
    } else if (!pattern.test(this.correo)) {
      this.mensaje_correo = 'Caracteres del correo invalido';
      console.log('Correo invalido: ' + this.correo);
      return false;
    }
    this.mensaje_correo = '';
    return true;
  }

  validarPass(): boolean | undefined {
    if (this.password.trim().length == 0) {
      this.mensaje_password = 'El campo Contraseña no puede estar vacio';
      return false;
    }
    this.mensaje_password = '';
    return true;
  }

  validarCaptcha(captchaResponse: string) {
    console.log(`Resolved captcha with response ${captchaResponse}:`);
    this.string_captcha = captchaResponse;
  }
}
