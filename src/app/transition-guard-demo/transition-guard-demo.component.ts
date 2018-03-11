import { Component, OnInit } from '@angular/core';
import { TransitionGuardService } from '../transition-guard/service/transition-guard.service';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { GuardRegistrationParams } from '../transition-guard/models/guard-registration-params';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Component({
  selector: 'app-transition-guard-demo',
  templateUrl: './transition-guard-demo.component.html',
  styleUrls: ['./transition-guard-demo.component.scss']
})
export class TransitionGuardDemoComponent implements OnInit {
  private dataChangeSubject: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(private transitionGuard: TransitionGuardService) { }

  ngOnInit() {
    this.transitionGuard.register({
      dataChangesObserver: this.dataChangeSubject.asObservable(),
      useCancelSaveDiscardModal: true,
      onSave: () => {
        return Observable.of(false);
      }
    } as GuardRegistrationParams);
  }

  changeData() {
    this.dataChangeSubject.next(true);
  }

}
