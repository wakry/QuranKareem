import { TestBed } from '@angular/core/testing';

import { SuwarService } from './suwar.service';

describe('SuwarService', () => {
  let service: SuwarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SuwarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
