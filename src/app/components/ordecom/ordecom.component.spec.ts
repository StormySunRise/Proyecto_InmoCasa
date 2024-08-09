import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdecomComponent } from './ordecom.component';

describe('OrdecomComponent', () => {
  let component: OrdecomComponent;
  let fixture: ComponentFixture<OrdecomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrdecomComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OrdecomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
