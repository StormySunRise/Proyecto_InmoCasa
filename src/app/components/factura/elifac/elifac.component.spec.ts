import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElifacComponent } from './elifac.component';

describe('ElifacComponent', () => {
  let component: ElifacComponent;
  let fixture: ComponentFixture<ElifacComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElifacComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ElifacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
