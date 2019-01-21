import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmoothButtonComponent } from './smooth-button.component';

describe('SmoothButtonComponent', () => {
  let component: SmoothButtonComponent;
  let fixture: ComponentFixture<SmoothButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmoothButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmoothButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
