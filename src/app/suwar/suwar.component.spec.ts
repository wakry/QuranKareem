import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuwarComponent } from './suwar.component';

describe('SuwarComponent', () => {
  let component: SuwarComponent;
  let fixture: ComponentFixture<SuwarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuwarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuwarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
