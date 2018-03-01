import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnlessDirectiveTestComponent } from './unless-directive-test.component';

describe('UnlessDirectiveTestComponent', () => {
  let component: UnlessDirectiveTestComponent;
  let fixture: ComponentFixture<UnlessDirectiveTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnlessDirectiveTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnlessDirectiveTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
