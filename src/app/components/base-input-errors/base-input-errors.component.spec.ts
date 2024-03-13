import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseInputErrorsComponent } from './base-input-errors.component';

describe('BaseInputErrorsComponent', () => {
  let component: BaseInputErrorsComponent;
  let fixture: ComponentFixture<BaseInputErrorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BaseInputErrorsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BaseInputErrorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
