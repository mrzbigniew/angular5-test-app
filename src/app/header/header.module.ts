import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    HeaderComponent
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule {
  constructor(@Optional() @SkipSelf() parent: HeaderModule) {
    if (parent) {
      throw new Error('Header module is imported already');
    }
  }
}
