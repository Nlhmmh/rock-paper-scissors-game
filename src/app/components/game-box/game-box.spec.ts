import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameBox } from './game-box';

describe('GameBox', () => {
  let component: GameBox;
  let fixture: ComponentFixture<GameBox>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GameBox]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameBox);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
