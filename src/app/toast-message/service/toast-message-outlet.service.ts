import { Injectable } from '@angular/core';
import { Router, RouterEvent, NavigationStart } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

import { Alert } from '../models/alert.model';
import { AlertType } from '../models/alert-type.enum';

@Injectable()
export class ToastMessageOutletService {
  private keepAfterRouteChange = false;
  private subject: Subject<Alert> = new Subject();

  constructor(private router: Router) {
    this.init();
  }

  private init() {
    this.router.events.subscribe((event: RouterEvent) => {
      if (event instanceof NavigationStart) {
        if (this.keepAfterRouteChange) {
          this.keepAfterRouteChange = false;
        } else {
          this.clear();
        }
      }
    });
  }

  getAlert(): Observable<Alert> {
    return this.subject.asObservable();
  }

  success(message: string, dismissible: boolean = false, keepAfterRouteChange: boolean = false) {
    this.alert(AlertType.Success, message, dismissible, keepAfterRouteChange);
  }

  error(message: string, dismissible: boolean = false, keepAfterRouteChange: boolean = false) {
    this.alert(AlertType.Error, message, dismissible, keepAfterRouteChange);
  }

  info(message: string, dismissible: boolean = false, keepAfterRouteChange: boolean = false) {
    this.alert(AlertType.Info, message, dismissible, keepAfterRouteChange);
  }

  alert(type: AlertType, message: string, dismissible: boolean = false, keepAfterRouteChange: boolean = false) {
    this.keepAfterRouteChange = keepAfterRouteChange;
    this.subject.next({
      type,
      message,
      dismissible
    } as Alert);
  }

  clear() {
    this.subject.next();
  }
}
