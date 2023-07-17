import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderUpComponent } from './header-up.component';

describe('HeaderUpComponent', () => {
  let component: HeaderUpComponent;
  let fixture: ComponentFixture<HeaderUpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderUpComponent]
    });
    fixture = TestBed.createComponent(HeaderUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
