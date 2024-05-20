import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  //Estos son los atributos de mi clase
  //forms del html en este caso solo tengo 1 formulario
  formularioLogin: FormGroup = new FormGroup({});
  



  //Estos son los métodos de mi clase
  //Este es el constructor de mi clase
  //Este se va a encargar de inicializar el objeto cuando la clase sea llamada
  //En este se va incorporar todo lo que se inicializa
  //Todas las funcionalidades que necesite dentro de la clase, se van a inicializar en el constructor
  constructor(
    //lo que estoy haciendo es llamar una variable fb, con un objeto de tipo FormBuilder, la variable es privada
    private fb: FormBuilder,
  ){}

  //Esta funcion se va a ejecutar cuando el componente se inicie

  ngOnInit(){
    //Acá estoy llamando a la función que construye el formulario
    this.construirformulario();
  }

  //Función que me permite construir mi formulario
  construirformulario(){
    //Acá estoy llamando a la variable que hay más arriba que es fGroup, y le estoy asignando un valor
    //El valor que estoy llamando es fb, que es la variable que inicialicé en el constructor
    this.formularioLogin = this.fb.group({
      //Acá estamos indicando cuantos input tiene el formulario, ya que después de hacer la función
      //de construir formulario, vamos a indicar siempre la cantidad de inputs, esto se hace para cada formulario
      usuario: ['', [Validators.required, Validators.email]],
      clave: ['',[Validators.required]]
    });
  }    

//Función para capturar los datos del formulario

CapturarDatos(){

  let usuario = this.formularioLogin.controls['usuario'].value;
  let clave = this.formularioLogin.controls['clave'].value;

  console.log(usuario);
  console.log(clave);
}






}
