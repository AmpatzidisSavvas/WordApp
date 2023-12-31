import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OddLengthWordsComponent } from './odd-length-words.component';

describe('OddLengthWordsComponent', () => {
  let component: OddLengthWordsComponent;
  let fixture: ComponentFixture<OddLengthWordsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OddLengthWordsComponent]
    });
    fixture = TestBed.createComponent(OddLengthWordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
