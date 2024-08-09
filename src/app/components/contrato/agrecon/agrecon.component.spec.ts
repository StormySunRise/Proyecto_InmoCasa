import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgreconComponent } from './agrecon.component';

describe('AgreconComponent', () => {
  let component: AgreconComponent;
  let fixture: ComponentFixture<AgreconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgreconComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AgreconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
