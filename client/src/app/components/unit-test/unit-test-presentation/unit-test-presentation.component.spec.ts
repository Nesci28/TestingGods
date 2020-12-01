import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitTestPresentationComponent } from './unit-test-presentation.component';

describe('UnitTestPresentationComponent', () => {
  let component: UnitTestPresentationComponent;
  let fixture: ComponentFixture<UnitTestPresentationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnitTestPresentationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitTestPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
