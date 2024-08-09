import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusveriComponent } from './busveri.component';

describe('BusveriComponent', () => {
  let component: BusveriComponent;
  let fixture: ComponentFixture<BusveriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BusveriComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BusveriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
