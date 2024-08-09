import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgresoliComponent } from './agresoli.component';

describe('AgresoliComponent', () => {
  let component: AgresoliComponent;
  let fixture: ComponentFixture<AgresoliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgresoliComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AgresoliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
