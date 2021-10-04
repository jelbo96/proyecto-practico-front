import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  email:string="";
  password:string="";

  mensaje_email="";
  mensaje_password="";

  /*constructor() { }

  ngOnInit(): void {
  }*/


  insertarLogin():void{
    if(this.validarEmail() && this.validarPass()){
      console.log("Email: "+ this.email,"Pass: "+ this.password);
    }
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



  
}
