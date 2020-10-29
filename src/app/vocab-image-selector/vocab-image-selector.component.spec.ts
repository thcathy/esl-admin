import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VocabImageSelectorComponent } from './vocab-image-selector.component';

describe('VocabImageSelectorComponent', () => {
  let component: VocabImageSelectorComponent;
  let fixture: ComponentFixture<VocabImageSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VocabImageSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VocabImageSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
