import { TestBed, inject } from '@angular/core/testing';

import { TableSpaceService } from './table-space.service';

describe('TableSpaceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TableSpaceService]
    });
  });

  it('should be created', inject([TableSpaceService], (service: TableSpaceService) => {
    expect(service).toBeTruthy();
  }));
});
