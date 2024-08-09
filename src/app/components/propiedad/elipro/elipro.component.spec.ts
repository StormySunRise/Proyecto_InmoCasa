import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliproComponent } from './elipro.component';

describe('EliproComponent', () => {
  let component: EliproComponent;
  let fixture: ComponentFixture<EliproComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EliproComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EliproComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
