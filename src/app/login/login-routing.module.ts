import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from './login-form/login-form.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginFormComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class LoginRoutingModule { }
