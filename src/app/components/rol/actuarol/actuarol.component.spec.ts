import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActuarolComponent } from './actuarol.component';

describe('ActuarolComponent', () => {
  let component: ActuarolComponent;
  let fixture: ComponentFixture<ActuarolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActuarolComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ActuarolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
