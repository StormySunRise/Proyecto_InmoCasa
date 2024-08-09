import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElimiprovComponent } from './elimiprov.component';

describe('ElimiprovComponent', () => {
  let component: ElimiprovComponent;
  let fixture: ComponentFixture<ElimiprovComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElimiprovComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ElimiprovComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
