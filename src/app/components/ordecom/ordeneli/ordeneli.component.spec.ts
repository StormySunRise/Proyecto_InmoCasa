import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdeneliComponent } from './ordeneli.component';

describe('OrdeneliComponent', () => {
  let component: OrdeneliComponent;
  let fixture: ComponentFixture<OrdeneliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrdeneliComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OrdeneliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
