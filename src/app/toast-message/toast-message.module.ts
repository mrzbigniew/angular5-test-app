import { NgModule, ModuleWithProviders } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

import { ToastMessageOutletComponent } from './toast-message-outlet/toast-message-outlet.component';
import { ToastMessageOutletService } from './service/toast-message-outlet.service';
import { DetachedToastMessageComponent } from './detached-toast-message/detached-toast-message.component';
import { DetachedToastMessageService } from './service/detached-toast-message.service';

@NgModule({
  imports: [
    CommonModule,
    NgbAlertModule.forRoot(),
    BrowserModule,
    BrowserAnimationsModule
  ],
  declarations: [
    ToastMessageOutletComponent,
    DetachedToastMessageComponent
  ],
  exports: [
    ToastMessageOutletComponent,
    DetachedToastMessageComponent
  ],
  providers: [
    ToastMessageOutletService,
    DetachedToastMessageService
  ],
  entryComponents: [
    ToastMessageOutletComponent,
    DetachedToastMessageComponent
  ]
})
export class ToastMessageModule {
  static forRot(): ModuleWithProviders {
    return {
      ngModule: ToastMessageModule,
      providers: [
        ToastMessageOutletService,
        DetachedToastMessageService
      ]
    }
  }
}
