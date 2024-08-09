import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElimirolComponent } from './elimirol.component';

describe('ElimirolComponent', () => {
  let component: ElimirolComponent;
  let fixture: ComponentFixture<ElimirolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElimirolComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ElimirolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
