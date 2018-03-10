import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelDiscardSaveDialogComponent } from './cancel-discard-save-dialog.component';

describe('CancelDiscardSaveDialogComponent', () => {
  let component: CancelDiscardSaveDialogComponent;
  let fixture: ComponentFixture<CancelDiscardSaveDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CancelDiscardSaveDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CancelDiscardSaveDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
