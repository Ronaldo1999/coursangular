import { TestBed } from '@angular/core/testing';

import { MarouteGuard } from './maroute.guard';

describe('MarouteGuard', () => {
  let guard: MarouteGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(MarouteGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
