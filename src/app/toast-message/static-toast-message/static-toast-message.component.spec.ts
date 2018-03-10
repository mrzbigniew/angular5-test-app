import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticToastMessageComponent } from './static-toast-message.component';

describe('StaticToastMessageComponent', () => {
  let component: StaticToastMessageComponent;
  let fixture: ComponentFixture<StaticToastMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaticToastMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaticToastMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
