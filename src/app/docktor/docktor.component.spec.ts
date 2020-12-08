import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocktorComponent } from './docktor.component';

describe('DocktorComponent', () => {
  let component: DocktorComponent;
  let fixture: ComponentFixture<DocktorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocktorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocktorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
