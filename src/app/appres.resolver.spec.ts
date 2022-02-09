import { TestBed } from '@angular/core/testing';

import { AppresResolver } from './appres.resolver';

describe('AppresResolver', () => {
  let resolver: AppresResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(AppresResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
