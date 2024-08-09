import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarrolComponent } from './buscarrol.component';

describe('BuscarrolComponent', () => {
  let component: BuscarrolComponent;
  let fixture: ComponentFixture<BuscarrolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuscarrolComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BuscarrolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
