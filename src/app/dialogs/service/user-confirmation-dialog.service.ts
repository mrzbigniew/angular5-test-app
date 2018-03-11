import { Injectable } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromPromise';

import { CancelDiscardDialogComponent } from '../cancel-discard-dialog/cancel-discard-dialog.component';
import { CancelDiscardSaveDialogComponent } from '../cancel-discard-save-dialog/cancel-discard-save-dialog.component';
import { UserConfirmationResult } from '../models/user-confirmation-result.enum';

@Injectable()
export class UserConfirmationDialogService {

  constructor(protected modalService: NgbModal) { }

  protected open(dialog: any): Observable<UserConfirmationResult> {
    const modalRef: NgbModalRef = this.modalService.open(dialog);
    return Observable.fromPromise(modalRef.result);
  }

  openCancelDiscardSave(): Observable<UserConfirmationResult> {
    return this.open(CancelDiscardSaveDialogComponent);
  }

  openCancelDiscard(): Observable<UserConfirmationResult> {
    return this.open(CancelDiscardDialogComponent);
  }
}
