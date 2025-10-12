import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectLang } from './select-lang';

describe('SelectLang', () => {
  let component: SelectLang;
  let fixture: ComponentFixture<SelectLang>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectLang]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectLang);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
