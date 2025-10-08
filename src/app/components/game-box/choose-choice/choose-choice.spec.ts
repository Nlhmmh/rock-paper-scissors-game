import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseChoice } from './choose-choice';

describe('ChooseChoice', () => {
  let component: ChooseChoice;
  let fixture: ComponentFixture<ChooseChoice>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChooseChoice]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChooseChoice);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
