import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeBox } from './welcome-box';

describe('WelcomeBox', () => {
  let component: WelcomeBox;
  let fixture: ComponentFixture<WelcomeBox>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WelcomeBox]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WelcomeBox);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
