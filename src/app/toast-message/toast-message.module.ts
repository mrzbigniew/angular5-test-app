import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastMessageComponent } from './toast-message/toast-message.component';
import { StaticToastMessageComponent } from './static-toast-message/static-toast-message.component';
import { OutletToastMessageComponent } from './outlet-toast-message/outlet-toast-message.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ToastMessageComponent,
    StaticToastMessageComponent,
    OutletToastMessageComponent
  ],
  exports: [
    StaticToastMessageComponent,
    OutletToastMessageComponent
  ],
  entryComponents: [
    ToastMessageComponent,
    StaticToastMessageComponent,
    OutletToastMessageComponent
  ],
  providers: []
})
export class ToastMessageModule { }
