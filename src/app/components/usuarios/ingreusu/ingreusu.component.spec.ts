import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngreusuComponent } from './ingreusu.component';

describe('IngreusuComponent', () => {
  let component: IngreusuComponent;
  let fixture: ComponentFixture<IngreusuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IngreusuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IngreusuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
