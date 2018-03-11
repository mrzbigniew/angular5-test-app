import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { UserConfirmationResult } from '../models/user-confirmation-result.enum';

@Component({
  selector: 'uic-cancel-discard-dialog',
  templateUrl: './cancel-discard-dialog.component.html',
  styleUrls: ['./cancel-discard-dialog.component.scss']
})
export class CancelDiscardDialogComponent {

  constructor(protected activeModal: NgbActiveModal) { }

  cancel() {
    this.activeModal.close(UserConfirmationResult.Cancel);
  }

  discard() {
    this.activeModal.close(UserConfirmationResult.DiscardChanges);
  }
}
