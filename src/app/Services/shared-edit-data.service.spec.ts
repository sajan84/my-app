import { TestBed } from '@angular/core/testing';

import { SharedEditDataService } from './shared-edit-data.service';

describe('SharedEditDataService', () => {
  let service: SharedEditDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedEditDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
