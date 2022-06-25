import { TestBed } from '@angular/core/testing';

import { ApiPublicapiService } from './api-publicapi.service';

describe('ApiPublicapiService', () => {
  let service: ApiPublicapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiPublicapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
