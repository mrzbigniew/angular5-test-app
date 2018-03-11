import { Component, OnInit, OnDestroy } from '@angular/core';
import { ToastMessageOutletService } from '../service/toast-message-outlet.service';
import { Alert } from '../models/alert.model';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'uic-toast-message-outlet',
  templateUrl: './toast-message-outlet.component.html',
  styleUrls: ['./toast-message-outlet.component.scss']
})
export class ToastMessageOutletComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  alerts: Alert[] = [];

  constructor(private toastMessageOutletService: ToastMessageOutletService) { }

  getAlerts() {
    this.subscription = this.toastMessageOutletService.getAlert().subscribe((alert: Alert) => {
      if (alert) {
        this.alerts.push(alert);
      } else {
        this.alerts = [];
      }
    });
  }

  close(alert: Alert) {
    if (alert.dismissible) {
      this.alerts = this.alerts.filter(current => current !== alert);
    }
  }

  ngOnInit() {
    this.getAlerts();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
