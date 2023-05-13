import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorsBlockComponent } from './errors-block.component';

describe('ErrorsBlockComponent', () => {
  let component: ErrorsBlockComponent;
  let fixture: ComponentFixture<ErrorsBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorsBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorsBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
