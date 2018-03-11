import { TestBed, inject } from '@angular/core/testing';

import { UserConfirmationDialogService } from './user-confirmation-dialog.service';

describe('UserConfirmationDialogService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserConfirmationDialogService]
    });
  });

  it('should be created', inject([UserConfirmationDialogService], (service: UserConfirmationDialogService) => {
    expect(service).toBeTruthy();
  }));
});
