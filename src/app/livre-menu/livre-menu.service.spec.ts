import { TestBed } from '@angular/core/testing';

import { LivreMenuService } from './livre-menu.service';

describe('LivreMenuService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LivreMenuService = TestBed.get(LivreMenuService);
    expect(service).toBeTruthy();
  });
});
