import { Component } from '@angular/core';

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
  constructor() {}

  ngOnInit(): void {}

  insertarLogin(): void {
    if (
      this.validarCorreo() &&
      this.validarPass() &&
      this.string_captcha.length > 0
    ) {
      console.log('Correo: ' + this.correo, 'Pass: ' + this.password);
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
