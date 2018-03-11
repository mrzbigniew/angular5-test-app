import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToastMessageOutletComponent } from './toast-message-outlet.component';

describe('ToastMessageOutletComponent', () => {
  let component: ToastMessageOutletComponent;
  let fixture: ComponentFixture<ToastMessageOutletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToastMessageOutletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToastMessageOutletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
