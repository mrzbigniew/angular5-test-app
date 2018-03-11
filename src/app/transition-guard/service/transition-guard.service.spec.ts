import { TestBed, inject } from '@angular/core/testing';

import { TransitionGuardService } from './transition-guard.service';

describe('TransitionGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TransitionGuardService]
    });
  });

  it('should be created', inject([TransitionGuardService], (service: TransitionGuardService) => {
    expect(service).toBeTruthy();
  }));
});
