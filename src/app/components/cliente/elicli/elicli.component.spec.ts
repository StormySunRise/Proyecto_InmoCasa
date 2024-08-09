import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElicliComponent } from './elicli.component';

describe('ElicliComponent', () => {
  let component: ElicliComponent;
  let fixture: ComponentFixture<ElicliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElicliComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ElicliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
