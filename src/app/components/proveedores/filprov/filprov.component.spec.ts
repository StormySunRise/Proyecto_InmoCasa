import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilprovComponent } from './filprov.component';

describe('FilprovComponent', () => {
  let component: FilprovComponent;
  let fixture: ComponentFixture<FilprovComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilprovComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FilprovComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
