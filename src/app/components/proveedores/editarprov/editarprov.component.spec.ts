import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarprovComponent } from './editarprov.component';

describe('EditarprovComponent', () => {
  let component: EditarprovComponent;
  let fixture: ComponentFixture<EditarprovComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditarprovComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditarprovComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
