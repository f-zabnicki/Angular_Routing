import { TestBed } from '@angular/core/testing';

import { FavouritesBooksService } from './favourites-books.service';

describe('FavouritesBooksService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FavouritesBooksService = TestBed.get(FavouritesBooksService);
    expect(service).toBeTruthy();
  });
});
