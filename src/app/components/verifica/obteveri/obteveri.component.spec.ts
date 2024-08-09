import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObteveriComponent } from './obteveri.component';

describe('ObteveriComponent', () => {
  let component: ObteveriComponent;
  let fixture: ComponentFixture<ObteveriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObteveriComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ObteveriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
