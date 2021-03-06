import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

import { CancelDiscardDialogComponent } from './cancel-discard-dialog/cancel-discard-dialog.component';
import { CancelDiscardSaveDialogComponent } from './cancel-discard-save-dialog/cancel-discard-save-dialog.component';
import { UserConfirmationDialogService } from './service/user-confirmation-dialog.service';

@NgModule({
  imports: [
    CommonModule,
    NgbModalModule.forRoot()
  ],
  declarations: [
    CancelDiscardDialogComponent,
    CancelDiscardSaveDialogComponent
  ],
  exports: [
    CancelDiscardDialogComponent,
    CancelDiscardSaveDialogComponent
  ],
  providers: [
    UserConfirmationDialogService
  ],
  entryComponents: [
    CancelDiscardDialogComponent,
    CancelDiscardSaveDialogComponent
  ]
})
export class DialogsModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: DialogsModule,
      providers: [
        UserConfirmationDialogService
      ]
    };
  }
}
