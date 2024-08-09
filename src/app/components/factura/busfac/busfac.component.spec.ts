import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusfacComponent } from './busfac.component';

describe('BusfacComponent', () => {
  let component: BusfacComponent;
  let fixture: ComponentFixture<BusfacComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BusfacComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BusfacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
