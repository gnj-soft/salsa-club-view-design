import { TestBed, inject } from '@angular/core/testing';

import { InitDataService } from './init-data.service';

describe('InitDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InitDataService]
    });
  });

  it('should be created', inject([InitDataService], (service: InitDataService) => {
    expect(service).toBeTruthy();
  }));
});
