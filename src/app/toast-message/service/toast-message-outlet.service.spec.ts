import { TestBed, inject } from '@angular/core/testing';

import { ToastMessageOutletService } from './toast-message-outlet.service';

describe('ToastMessageOutletService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ToastMessageOutletService]
    });
  });

  it('should be created', inject([ToastMessageOutletService], (service: ToastMessageOutletService) => {
    expect(service).toBeTruthy();
  }));
});
