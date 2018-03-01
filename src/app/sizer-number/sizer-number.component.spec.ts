import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SizerNumberComponent } from './sizer-number.component';

describe('SizerNumberComponent', () => {
  let component: SizerNumberComponent;
  let fixture: ComponentFixture<SizerNumberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SizerNumberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SizerNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
