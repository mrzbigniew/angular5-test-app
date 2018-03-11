import { TestBed, inject } from '@angular/core/testing';

import { DetachedToastMessageService } from './detached-toast-message.service';

describe('DetachedToastMessageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DetachedToastMessageService]
    });
  });

  it('should be created', inject([DetachedToastMessageService], (service: DetachedToastMessageService) => {
    expect(service).toBeTruthy();
  }));
});
