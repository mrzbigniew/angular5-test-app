import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from './shared/user.service';
import { UserInfoComponent } from './user-info/user-info.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [],
  declarations: [
    UserInfoComponent
  ],
  providers: [
    UserService
  ],
  bootstrap: []
})
export class UserModule {
  constructor( @Optional() @SkipSelf() parentModule: UserModule) {
    if (parentModule) {
      throw new Error('UserModule is already loaded');
    }
  }
}
