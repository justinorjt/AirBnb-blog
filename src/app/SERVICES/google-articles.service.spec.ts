import { TestBed } from '@angular/core/testing';

import { GoogleArticlesService } from './google-articles.service';

describe('GoogleArticlesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GoogleArticlesService = TestBed.get(GoogleArticlesService);
    expect(service).toBeTruthy();
  });
});
