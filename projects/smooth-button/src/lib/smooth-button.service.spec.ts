import { TestBed } from '@angular/core/testing';

import { SmoothButtonService } from './smooth-button.service';

describe('SmoothButtonService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SmoothButtonService = TestBed.get(SmoothButtonService);
    expect(service).toBeTruthy();
  });
});
