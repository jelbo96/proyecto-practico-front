import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  nombre = '';
  correo: string = '';
  password: string = '';
  config_password = '';

  mensaje_nombre = '';
  mensaje_correo = '';
  mensaje_password = '';
  mensaje_config_password = '';

  /*constructor() { }

  ngOnInit(): void {
  }*/

  insertarRegistro(): void {
    if (
      this.validarNombre() &&
      this.validarCorreo() &&
      this.validarPass() &&
      this.validarConfigPass()
    ) {
      console.log('Nombre: ' + this.nombre);
      console.log('Correo: ' + this.correo);
      console.log('Pass: ' + this.password);
      console.log('Confirmar Pass: ' + this.config_password);
    }
  }

  validarNombre(): boolean | undefined {
    if (this.nombre.trim().length == 0) {
      this.mensaje_nombre = 'Nombre no puede estar vacio';
      return false;
    } else if (this.nombre.length > 10) {
      this.mensaje_nombre = 'Nombre maximo 10 caracteres';
      return false;
    } else {
      console.log('Nombre: ' + this.nombre);
      this.mensaje_nombre = '';
      return true;
    }
  }

  validarCorreo(): boolean | undefined {
    var pattern = new RegExp(
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
    if (!pattern.test(this.correo)) {
      this.mensaje_correo = 'Caracteres del correo invalido';
      console.log('Correo invalido: ' + this.correo);
      return false;
    } else if (this.correo.trim().length == 0) {
      this.mensaje_correo = 'El campo Correo no puede estar vacio';
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

  validarConfigPass(): boolean | undefined {
    if (this.config_password.trim().length == 0) {
      this.mensaje_config_password =
        'El campo Confirmar Contraseña no puede estar vacio';
      return false;
    } else if (this.password != this.config_password) {
      console.log('ConfirmPass: ' + this.config_password);
      this.mensaje_config_password = 'Las pass no coinciden';
      return false;
    } else {
      this.mensaje_config_password = '';
      return true;
    }
  }
}
