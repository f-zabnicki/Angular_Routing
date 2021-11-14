import { TestBed } from '@angular/core/testing';

import { BooksCountService } from '../books-count.service';

describe('BooksCountService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BooksCountService = TestBed.get(BooksCountService);
    expect(service).toBeTruthy();
  });
});
