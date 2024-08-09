import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarusuComponent } from './buscarusu.component';

describe('BuscarusuComponent', () => {
  let component: BuscarusuComponent;
  let fixture: ComponentFixture<BuscarusuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuscarusuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BuscarusuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
