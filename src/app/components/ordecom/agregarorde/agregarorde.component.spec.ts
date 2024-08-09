import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarordeComponent } from './agregarorde.component';

describe('AgregarordeComponent', () => {
  let component: AgregarordeComponent;
  let fixture: ComponentFixture<AgregarordeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgregarordeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AgregarordeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
