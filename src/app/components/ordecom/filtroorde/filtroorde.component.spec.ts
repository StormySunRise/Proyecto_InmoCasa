import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltroordeComponent } from './filtroorde.component';

describe('FiltroordeComponent', () => {
  let component: FiltroordeComponent;
  let fixture: ComponentFixture<FiltroordeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FiltroordeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FiltroordeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
