import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { TransitionGuardModule } from './transition-guard/transition-guard.module';
import { DialogsModule } from './dialogs/dialogs.module';
import { ToastMessageModule } from './toast-message/toast-message.module';
import { HeaderModule } from './header/header.module';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TransitionGuardDemoComponent } from './transition-guard-demo/transition-guard-demo.component';
import { ToastMessageDemoComponent } from './toast-message-demo/toast-message-demo.component';
import { CheckboxTestComponent } from './checkbox-test/checkbox-test.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TransitionGuardDemoComponent,
    ToastMessageDemoComponent,
    CheckboxTestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HeaderModule,
    TransitionGuardModule,
    DialogsModule,
    ToastMessageModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
