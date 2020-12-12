import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorSelectionComponentComponent } from './doctor-selection-component.component';

describe('DoctorSelectionComponentComponent', () => {
  let component: DoctorSelectionComponentComponent;
  let fixture: ComponentFixture<DoctorSelectionComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorSelectionComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorSelectionComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
