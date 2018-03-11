import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { UserConfirmationResult } from '../models/user-confirmation-result.enum';
import { CancelDiscardDialogComponent } from '../cancel-discard-dialog/cancel-discard-dialog.component';

@Component({
  selector: 'uic-cancel-discard-save-dialog',
  templateUrl: './cancel-discard-save-dialog.component.html',
  styleUrls: ['./cancel-discard-save-dialog.component.scss']
})
export class CancelDiscardSaveDialogComponent extends CancelDiscardDialogComponent {

  constructor(activeModal: NgbActiveModal) {
    super(activeModal);
  }

  save() {
    this.activeModal.close(UserConfirmationResult.SaveChanges);
  }
}
