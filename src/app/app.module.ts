import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

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
import { TourOfHeroesModule } from './tour-of-heroes/tour-of-heroes.module';
import { UnlessDirective } from './unless/unless.directive';
import { UnlessDirectiveTestComponent } from './unless-directive-test/unless-directive-test.component';
import { ClickableDirective } from './clickable/clickable.directive';
import { ChildComponent } from './child/child.component';
import { SizerComponent } from './sizer/sizer.component';
import { SizerNumberComponent } from './sizer-number/sizer-number.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    HamburgerComponent,
    CoverComponent,
    DashboardComponent,
    UnlessDirective,
    UnlessDirectiveTestComponent,
    ClickableDirective,
    ChildComponent,
    SizerComponent,
    SizerNumberComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    BrowserAnimationsModule,
    UserModule,
    LoginModule,
    AuthModule,
    TourOfHeroesModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
