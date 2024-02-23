import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { editauthGuard } from './editauth.guard';

describe('editauthGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => editauthGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
