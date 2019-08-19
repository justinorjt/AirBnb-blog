import { TestBed } from '@angular/core/testing';

import { KitcollectionService } from './kitcollection.service';

describe('KitcollectionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KitcollectionService = TestBed.get(KitcollectionService);
    expect(service).toBeTruthy();
  });
});
