import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from './login-form/login-form.component';
import { LoginComponent } from './login.component';
import { UserModule } from '../user/user.module';
import { LoginRoutingModule } from './login-routing.module';

@NgModule({
  imports: [
    CommonModule,
    UserModule,
    LoginRoutingModule
  ],
  declarations: [
    LoginFormComponent,
    LoginComponent
  ]
})
export class LoginModule {
  constructor( @Optional() @SkipSelf() parentModule: LoginModule) {
    if (parentModule) {
      throw new Error('LoginModule is already loaded');
    }
  }
}
