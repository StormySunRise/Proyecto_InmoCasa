import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdicliComponent } from './edicli.component';

describe('EdicliComponent', () => {
  let component: EdicliComponent;
  let fixture: ComponentFixture<EdicliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EdicliComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EdicliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
