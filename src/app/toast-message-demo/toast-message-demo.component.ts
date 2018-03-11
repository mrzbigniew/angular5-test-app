import { Component, OnInit } from '@angular/core';
import { ToastMessageOutletService } from '../toast-message/service/toast-message-outlet.service';
import { DetachedToastMessageService } from '../toast-message/service/detached-toast-message.service';

@Component({
  selector: 'app-toast-message-demo',
  templateUrl: './toast-message-demo.component.html',
  styleUrls: ['./toast-message-demo.component.scss']
})
export class ToastMessageDemoComponent implements OnInit {

  constructor(
    private toastMessageOutletService: ToastMessageOutletService,
    private detachedToastMessageService: DetachedToastMessageService
  ) { }

  ngOnInit() {
  }

  toastOutletError() {
    this.toastMessageOutletService.error('error');
  }
  toastOutletInfo() {
    this.toastMessageOutletService.info('info');
  }
  toastOutletSuccess() {
    this.toastMessageOutletService.success('success');
  }

  detachedOutletError() {
    this.detachedToastMessageService.error('error');
  }
  detachedOutletInfo() {
    this.detachedToastMessageService.info('info');
  }
  detachedOutletSuccess() {
    this.detachedToastMessageService.success('success');
  }
}
