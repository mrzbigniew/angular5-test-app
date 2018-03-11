import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';

import { TransitionGuardModule } from './transition-guard/transition-guard.module';
import { UserConfirmationDialogModule } from './user-confirmation-dialog/user-confirmation-dialog.module';
import { ToastMessageModule } from './toast-message/toast-message.module';
import { HeaderModule } from './header/header.module';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TransitionGuardDemoComponent } from './transition-guard-demo/transition-guard-demo.component';
import { ToastMessageDemoComponent } from './toast-message-demo/toast-message-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TransitionGuardDemoComponent,
    ToastMessageDemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HeaderModule,
    TransitionGuardModule,
    UserConfirmationDialogModule,
    ToastMessageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
