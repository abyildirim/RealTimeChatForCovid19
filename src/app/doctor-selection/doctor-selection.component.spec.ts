import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorSelectionComponent } from './doctor-selection.component';

describe('DoctorSelectionComponent', () => {
  let component: DoctorSelectionComponent;
  let fixture: ComponentFixture<DoctorSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorSelectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
