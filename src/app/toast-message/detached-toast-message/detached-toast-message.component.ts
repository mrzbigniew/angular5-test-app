import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

import { DetachedToastMessageService } from '../service/detached-toast-message.service';
import { Alert } from '../models/alert.model';

@Component({
  selector: 'uic-detached-toast-message',
  templateUrl: './detached-toast-message.component.html',
  styleUrls: ['./detached-toast-message.component.scss'],
  animations: [
    trigger('messageState', [
      state('inactive', style({
        display: 'none',
        opacity: 0
      })),
      state('active', style({
        display: 'block',
        opacity: 1
      })),
      transition('inactive => active', [
        animate('1s ease-in')
      ]),
      transition('active => inactive', [
        animate('3s ease-out')
      ])
    ])
  ]
})
export class DetachedToastMessageComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  messageState = 'inactive';
  alert: Alert;

  constructor(private detachedToastMessageService: DetachedToastMessageService) { }

  setAlert(alert: Alert) {
    this.alert = alert;
  }

  setActiveState() {
    this.messageState = 'active';
  }

  setInactiveState() {
    this.messageState = 'inactive';
  }

  clearAlert() {
    this.alert = null;
  }

  runAlertAnimation() {
    this.setActiveState();
    setTimeout(() => {
      this.setInactiveState();
    }, 5000);
  }

  getAlert() {
    this.subscription = this.detachedToastMessageService.getAlert().subscribe((alert: Alert) => {
      this.clearAlert();
      this.setAlert(alert);
      this.runAlertAnimation();
    });
  }

  ngOnInit() {
    this.getAlert();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  close() {
    if (this.alert.dismissible) {
      this.alert = null;
    }
  }
}
