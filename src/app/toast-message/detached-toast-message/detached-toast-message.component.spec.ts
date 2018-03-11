import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetachedToastMessageComponent } from './detached-toast-message.component';

describe('DetachedToastMessageComponent', () => {
  let component: DetachedToastMessageComponent;
  let fixture: ComponentFixture<DetachedToastMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetachedToastMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetachedToastMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
