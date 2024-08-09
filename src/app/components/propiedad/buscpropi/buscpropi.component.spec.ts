import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscpropiComponent } from './buscpropi.component';

describe('BuscpropiComponent', () => {
  let component: BuscpropiComponent;
  let fixture: ComponentFixture<BuscpropiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuscpropiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BuscpropiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
