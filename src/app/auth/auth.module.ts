import { NgModule, SkipSelf, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class AuthModule {
  constructor( @Optional() @SkipSelf() parentInstance: AuthModule) {
    if (parentInstance) {
      throw new Error('AuthModule already loaded');
    }
  }
}
