import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/observable/of';

import { GuardRegistrationParams } from './guard-registration-params';
import { UserConfirmationDialogService } from '../user-confirmation-dialog/service/user-confirmation-dialog.service';
import { Subject } from 'rxjs/Subject';
import { UserConfirmationResult } from '../user-confirmation-dialog/models/user-confirmation-result.enum';

@Injectable()
export class NavigationGuardService implements CanDeactivate<any> {
  private dataChangeSubscription: Subscription;
  private saveCallback: () => Observable<boolean>;
  private cancelCallback: () => Observable<boolean>;
  private discardCallback: () => Observable<boolean>;
  private dataChangesObserver: Observable<boolean>;
  private useCancelSaveDiscardModal = false;
  private isDataChanged: boolean;

  constructor(private userConfirmationDialogService: UserConfirmationDialogService) { }

  private clearParams() {
    this.unsubscribe();
    this.saveCallback = null;
    this.cancelCallback = null;
    this.discardCallback = null;
    this.dataChangesObserver = null;
    this.isDataChanged = false;
  }

  private unsubscribe(): void {
    if (this.dataChangeSubscription && !this.dataChangeSubscription.closed) {
      this.dataChangeSubscription.unsubscribe();
    }
  }

  private subscribe(): void {
    this.dataChangeSubscription = this.dataChangesObserver.subscribe((isDataChanged: boolean) => {
      this.setDataChanged(isDataChanged);
    });
  }

  private doOnSave(): Observable<boolean> {
    const saveResult: Observable<boolean> = this.saveCallback();
    saveResult.subscribe((result: boolean) => {
      if (result) {
        this.displaySaveSuccessMessage();
        this.clearParams();
      } else {
        this.displaySaveFailMessage();
      }
    });
    return saveResult;
  }

  private doOnCancel(): Observable<boolean> {
    let result: Observable<boolean> = Observable.of(false);
    if (this.cancelCallback) {
      result = this.cancelCallback();
    }
    return result;
  }

  private doOnDiscard(): Observable<boolean> {
    let result: Observable<boolean> = Observable.of(true);
    if (this.discardCallback) {
      result = this.discardCallback();
    }
    result.subscribe(() => {
      this.displayDiscardChangesMessage();
      this.clearParams();
    });
    return result;
  }

  private setDataChanged(dataChanged: boolean) {
    this.isDataChanged = dataChanged;
  }

  private setParams(params: GuardRegistrationParams) {
    this.saveCallback = params.onSave;
    this.cancelCallback = params.onCancel || null;
    this.discardCallback = params.onDiscard || null;
    this.useCancelSaveDiscardModal = params.useCancelSaveDiscardModal || false;
    this.dataChangesObserver = params.dataChangesObserver;
  }

  private handleUserConfirmationResult(userConfirmationResult: Observable<UserConfirmationResult>): Observable<boolean> {
    const subject: Subject<boolean> = new Subject();
    userConfirmationResult.subscribe((result: UserConfirmationResult) => {
      let callbackResult: Observable<boolean>;
      if (result === UserConfirmationResult.Cancel) {
        callbackResult = this.doOnCancel();
      } else if (result === UserConfirmationResult.DiscardChanges) {
        callbackResult = this.doOnDiscard();
      } else if (result === UserConfirmationResult.SaveChanges) {
        callbackResult = this.doOnSave();
      }
      callbackResult.subscribe((actionResult: boolean) => {
        subject.next(actionResult);
      });
    });
    return subject.asObservable();
  }

  private getUserConfirmation(): Observable<boolean> {
    const userConfirmationResult: Observable<UserConfirmationResult> = this.openConfirmationModal();
    return this.handleUserConfirmationResult(userConfirmationResult);
  }

  private openConfirmationModal(): Observable<UserConfirmationResult> {
    let userConfirmationResult: Observable<UserConfirmationResult>;
    if (this.useCancelSaveDiscardModal) {
      userConfirmationResult = this.userConfirmationDialogService.openCancelDiscardSave();
    } else {
      userConfirmationResult = this.userConfirmationDialogService.openCancelDiscard();
    }
    return userConfirmationResult;
  }

  private checkIfCanDeactivate(): Observable<boolean> {
    if (!this.isDataChanged) {
      return Observable.of(true);
    }
    return this.getUserConfirmation();
  }

  private displaySaveFailMessage() {

  }

  private displaySaveSuccessMessage() {

  }

  private displayDiscardChangesMessage() {

  }

  register(params: GuardRegistrationParams) {
    this.unsubscribe();
    this.setParams(params);
    this.subscribe();
  }

  canDeactivate(): Observable<boolean> {
    return this.checkIfCanDeactivate();
  }
}
