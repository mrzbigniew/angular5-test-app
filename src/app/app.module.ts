import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';

import { NavigationGuardModule } from './navigation-guard/navigation-guard.module';
import { UserConfirmationDialogModule } from './user-confirmation-dialog/user-confirmation-dialog.module';
import { ToastMessageModule } from './toast-message/toast-message.module';
import { HeaderModule } from './header/header.module';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HeaderModule,
    NavigationGuardModule,
    UserConfirmationDialogModule,
    ToastMessageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
