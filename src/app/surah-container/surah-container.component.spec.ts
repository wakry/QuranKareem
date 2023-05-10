import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurahContainerComponent } from './surah-container.component';

describe('SurahContainerComponent', () => {
  let component: SurahContainerComponent;
  let fixture: ComponentFixture<SurahContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SurahContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SurahContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
