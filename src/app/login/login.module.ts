import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  imports: [
    LoginRoutingModule,
   CommonModule,
   FormsModule,
   ReactiveFormsModule
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }
