import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  nombre="";
  email:string="";
  password:string="";
  config_password="";

  mensaje_nombre="";
  mensaje_email="";
  mensaje_password="";
  mensaje_config_password="";

  /*constructor() { }

  ngOnInit(): void {
  }*/

  insertarRegistro():void{
    if(this.validarNombre() && this.validarEmail() 
    && this.validarPass() && this.validarConfigPass()){
      console.log("Nombre: "+ this.nombre);
      console.log("Nombre: "+ this.nombre);
    }
  }

  validarNombre():boolean | undefined{
    if(this.nombre.trim().length == 0){
      this.mensaje_nombre="El campo Nombre no puede estra vacio";
    }
    this.mensaje_nombre="";
    return true;
  }

  validarEmail():boolean | undefined{
    var pattern  = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    if(!pattern.test(this.email)){
      this.mensaje_email="Caracteres del correo invalido";
      console.log("Correo invalido: "+this.email)
      return false;
    }
    else if(this.email.trim().length == 0){
      this.mensaje_email="El campo Email no puede estar vacio";
      return false;
    }
    this.mensaje_email="";
    return true;
    
  }

  validarPass():boolean | undefined{
    if(this.password.trim().length == 0){
      this.mensaje_password="El campo Contraseña no puede estar vacio";
      return false;
    }
    this.mensaje_password="";
    return true;
  }


  validarConfigPass():boolean | undefined{
    if(this.config_password.trim().length == 0){
      this.mensaje_config_password="El campo Contraseña no puede estar vacio";
      return false;
    }
    else if(this.password != this.config_password){
      console.log("ConfirmPass: "+this.config_password);
      this.mensaje_config_password="Las pass no coinciden";
      return false;
    }
    this.mensaje_config_password="";
    return true;
  }

}
