import { TestBed } from '@angular/core/testing';

import { CollectionMenuService } from './collection-menu.service';

describe('CollectionMenuService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CollectionMenuService = TestBed.get(CollectionMenuService);
    expect(service).toBeTruthy();
  });
});
