import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVocabImageComponent } from './add-vocab-image.component';

describe('AddVocabImageComponent', () => {
  let component: AddVocabImageComponent;
  let fixture: ComponentFixture<AddVocabImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddVocabImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddVocabImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
