import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';

import { UserModule } from './user/user.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { MenuComponent } from './menu/menu.component';
import { HamburgerComponent } from './hamburger/hamburger.component';

import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { CoverComponent } from './cover/cover.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginModule } from './login/login.module';
import { AuthModule } from './auth/auth.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    HamburgerComponent,
    CoverComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    BrowserAnimationsModule,
    UserModule,
    LoginModule,
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
