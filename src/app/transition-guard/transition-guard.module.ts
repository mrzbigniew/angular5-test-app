import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuleWithProviders } from '@angular/compiler/src/core';

import { TransitionGuardService } from './service/transition-guard.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    TransitionGuardService
  ]
})
export class TransitionGuardModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: TransitionGuardModule,
      providers: [
        TransitionGuardService
      ]
    };
  }
}
