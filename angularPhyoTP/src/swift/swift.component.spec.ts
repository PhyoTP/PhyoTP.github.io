import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwiftComponent } from './swift.component';

describe('SwiftComponent', () => {
  let component: SwiftComponent;
  let fixture: ComponentFixture<SwiftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SwiftComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SwiftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
