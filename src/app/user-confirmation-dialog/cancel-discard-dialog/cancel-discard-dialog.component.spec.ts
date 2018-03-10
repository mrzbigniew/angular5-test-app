import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelDiscardDialogComponent } from './cancel-discard-dialog.component';

describe('CancelDiscardDialogComponent', () => {
  let component: CancelDiscardDialogComponent;
  let fixture: ComponentFixture<CancelDiscardDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CancelDiscardDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CancelDiscardDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
