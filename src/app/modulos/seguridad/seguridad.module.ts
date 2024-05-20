import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeguridadRoutingModule } from './seguridad-routing.module';
import { LoginComponent } from './login/login.component';

//imports para que mis formularios funcionen (formgroup, formbuilder, validators)
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Login2Component } from './login2/login2.component';


@NgModule({
  declarations: [
    LoginComponent,
    Login2Component
  ],
  imports: [
    CommonModule,
    SeguridadRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SeguridadModule { }
