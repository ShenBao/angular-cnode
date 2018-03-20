import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataNullComponent } from './data-null.component';

describe('DataNullComponent', () => {
  let component: DataNullComponent;
  let fixture: ComponentFixture<DataNullComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataNullComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataNullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
