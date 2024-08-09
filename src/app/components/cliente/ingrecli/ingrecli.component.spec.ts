import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngrecliComponent } from './ingrecli.component';

describe('IngrecliComponent', () => {
  let component: IngrecliComponent;
  let fixture: ComponentFixture<IngrecliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IngrecliComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IngrecliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
