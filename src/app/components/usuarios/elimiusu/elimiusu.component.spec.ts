import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElimiusuComponent } from './elimiusu.component';

describe('ElimiusuComponent', () => {
  let component: ElimiusuComponent;
  let fixture: ComponentFixture<ElimiusuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElimiusuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ElimiusuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
