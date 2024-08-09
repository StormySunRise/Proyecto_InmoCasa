import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngrerolComponent } from './ingrerol.component';

describe('IngrerolComponent', () => {
  let component: IngrerolComponent;
  let fixture: ComponentFixture<IngrerolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IngrerolComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IngrerolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
