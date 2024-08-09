import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngrepopiComponent } from './ingrepopi.component';

describe('IngrepopiComponent', () => {
  let component: IngrepopiComponent;
  let fixture: ComponentFixture<IngrepopiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IngrepopiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IngrepopiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
