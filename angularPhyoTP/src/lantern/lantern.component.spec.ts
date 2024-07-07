import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanternComponent } from './lantern.component';

describe('LanternComponent', () => {
  let component: LanternComponent;
  let fixture: ComponentFixture<LanternComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LanternComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LanternComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
