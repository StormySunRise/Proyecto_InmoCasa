import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdipropiComponent } from './edipropi.component';

describe('EdipropiComponent', () => {
  let component: EdipropiComponent;
  let fixture: ComponentFixture<EdipropiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EdipropiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EdipropiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
