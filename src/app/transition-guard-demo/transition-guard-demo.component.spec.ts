import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransitionGuardDemoComponent } from './transition-guard-demo.component';

describe('TransitionGuardDemoComponent', () => {
  let component: TransitionGuardDemoComponent;
  let fixture: ComponentFixture<TransitionGuardDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransitionGuardDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransitionGuardDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
