import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeaderModule } from './header/header.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ToastMessageDemoComponent } from './toast-message-demo/toast-message-demo.component';
import { TransitionGuardDemoComponent } from './transition-guard-demo/transition-guard-demo.component';
import { TransitionGuardService } from './transition-guard/service/transition-guard.service';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  }, {
    path: 'dashboard',
    component: DashboardComponent
  }, {
    path: 'toast-demo',
    component: ToastMessageDemoComponent
  }, {
    path: 'transition-guard-demo',
    component: TransitionGuardDemoComponent,
    canDeactivate: [
      TransitionGuardService
    ]
  }, {
    path: '**',
    component: DashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
