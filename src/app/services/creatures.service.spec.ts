import { TestBed } from '@angular/core/testing';

import { CreaturesService } from './creatures.service';

describe('CreaturesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CreaturesService = TestBed.get(CreaturesService);
    expect(service).toBeTruthy();
  });
});
