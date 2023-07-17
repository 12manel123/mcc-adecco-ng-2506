import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderDownComponent } from './header-down.component';

describe('HeaderDownComponent', () => {
  let component: HeaderDownComponent;
  let fixture: ComponentFixture<HeaderDownComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderDownComponent]
    });
    fixture = TestBed.createComponent(HeaderDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
