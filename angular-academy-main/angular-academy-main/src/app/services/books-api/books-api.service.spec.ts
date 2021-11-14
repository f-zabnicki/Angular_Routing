/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BooksApiService } from './books-api.service';

describe('Service: BooksApi', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BooksApiService]
    });
  });

  it('should ...', inject([BooksApiService], (service: BooksApiService) => {
    expect(service).toBeTruthy();
  }));
});
