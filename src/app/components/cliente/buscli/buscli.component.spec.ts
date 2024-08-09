import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscliComponent } from './buscli.component';

describe('BuscliComponent', () => {
  let component: BuscliComponent;
  let fixture: ComponentFixture<BuscliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuscliComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BuscliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
