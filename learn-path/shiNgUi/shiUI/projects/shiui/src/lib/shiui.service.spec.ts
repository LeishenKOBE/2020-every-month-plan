import { TestBed } from '@angular/core/testing';

import { ShiuiService } from './shiui.service';

describe('ShiuiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShiuiService = TestBed.get(ShiuiService);
    expect(service).toBeTruthy();
  });
});
