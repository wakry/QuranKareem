import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurahViewComponent } from './surah-view.component';

describe('SurahViewComponent', () => {
  let component: SurahViewComponent;
  let fixture: ComponentFixture<SurahViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SurahViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SurahViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
