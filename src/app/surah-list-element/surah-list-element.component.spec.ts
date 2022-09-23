import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurahListElementComponent } from './surah-list-element.component';

describe('SurahListElementComponent', () => {
  let component: SurahListElementComponent;
  let fixture: ComponentFixture<SurahListElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SurahListElementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SurahListElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
