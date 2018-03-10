import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutletToastMessageComponent } from './outlet-toast-message.component';

describe('OutletToastMessageComponent', () => {
  let component: OutletToastMessageComponent;
  let fixture: ComponentFixture<OutletToastMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutletToastMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutletToastMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
