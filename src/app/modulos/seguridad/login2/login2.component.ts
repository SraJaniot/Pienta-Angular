import { Component } from '@angular/core';

//libreria FormBuilder y FormGroup para agregar
//También agregamos el Validators para las validaciones a los formularios
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login2',
  templateUrl: './login2.component.html',
  styleUrl: './login2.component.css'
})
export class Login2Component {
//IMPORTANTE: Todo siempre debe estar adentro del export class ya que todas las funciones son locales y no globales

  //Esto es para poder capturar los datos
  //Construcción del formulario que se va a utilizar
  fGroup: FormGroup = new FormGroup({}); //fGroup es el nombre de la variable
                                        //Se inicializa vacía 
                                        //Va a tener muchas cosas adentro
  constructor(
    private fb: FormBuilder,) //El fb nos ayuda a especificar qué se va a ingresar
  {}                          //El FormBuilder está instanciandose (se prepara) como una variable de tipo formBuilder
                              //Dependiendo de los form que hayan (en este caso hay 1), se le corresponde una variable en TypeScript
  
  construirformulario(){
    this.fGroup = this.fb.group({ //Acá llamamos la variable fGroup para que entienda por fb qué tipo de variables vamos a tomar
      usuario: ['', [Validators.required, Validators.email]], //Acá se especifica que el usuario es un input vacío
                                                              //Y también indicamos que es un email
                    //Acá indicamos también que deben obligatoriamente llenar los campos
      clave: ['', [Validators.required]] //Acá se especifica que la clave es un input vacío

    })
  } 
  
  ngOnInit(): void{ //Acá indicamos que podemos inicializar el formulario

    this.construirformulario(); //Acá lo podremos inicializar siempre
  }

  capturardatos(){
    let usuario =this.fGroup.controls['usuario'].value; //Acá se captura el valor del usuario
    let clave =this.fGroup.controls['clave'].value; //Acá se captura el valor de la clave

    console.log(usuario); //Acá se imprime en consola el valor del usuario
    console.log(clave); //Acá se imprime en consola el valor de la clave
  }

}


