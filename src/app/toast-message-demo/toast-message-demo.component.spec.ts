import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToastMessageDemoComponent } from './toast-message-demo.component';

describe('ToastMessageDemoComponent', () => {
  let component: ToastMessageDemoComponent;
  let fixture: ComponentFixture<ToastMessageDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToastMessageDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToastMessageDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
