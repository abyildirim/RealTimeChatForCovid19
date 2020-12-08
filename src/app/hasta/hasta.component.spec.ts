import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HastaComponent } from './hasta.component';

describe('HastaComponent', () => {
  let component: HastaComponent;
  let fixture: ComponentFixture<HastaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HastaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HastaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
