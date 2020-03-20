import { TestBed } from '@angular/core/testing';

import { BookLogService } from './book-log.service';

describe('BookLogService', () => {
  let service: BookLogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookLogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
