import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoBackComponent } from './go-back.component';

describe('GoBackComponent', () => {
  let component: GoBackComponent;
  let fixture: ComponentFixture<GoBackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoBackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
