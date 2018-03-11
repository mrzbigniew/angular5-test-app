import { Injectable } from '@angular/core';
import { Router, RouterEvent, NavigationStart } from '@angular/router';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

import { Alert } from '../models/alert.model';
import { AlertType } from '../models/alert-type.enum';

@Injectable()
export class DetachedToastMessageService {
  private subject: BehaviorSubject<Alert> = new BehaviorSubject(null);
  private keepAfterRouteChange = true;

  constructor(private router: Router) {
    this.router.events.subscribe((event: RouterEvent) => {
      if (event instanceof NavigationStart) {
        if (!this.keepAfterRouteChange) {
          this.clear();
        }
        this.keepAfterRouteChange = true;
      }
    });
  }

  success(message: string, dismissible: boolean = false, keepAfterRouteChange: boolean = true) {
    this.alert(AlertType.Success, message, dismissible, keepAfterRouteChange);
  }

  error(message: string, dismissible: boolean = false, keepAfterRouteChange: boolean = true) {
    this.alert(AlertType.Error, message, dismissible, keepAfterRouteChange);
  }

  info(message: string, dismissible: boolean = false, keepAfterRouteChange: boolean = true) {
    this.alert(AlertType.Info, message, dismissible, keepAfterRouteChange);
  }

  alert(type: AlertType, message: string, dismissible: boolean = false, keepAfterRouteChange: boolean = true) {
    this.keepAfterRouteChange = keepAfterRouteChange;
    this.subject.next({
      type,
      message,
      dismissible
    } as Alert);
  }

  getAlert(): Observable<Alert> {
    return this.subject.asObservable();
  }

  clear() {
    this.subject.next(null);
  }
}
