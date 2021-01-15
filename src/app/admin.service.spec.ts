import { TestBed } from '@angular/core/testing';

import { AdminService } from './admin.service';
import { PipesModule } from 'pipes-module';

describe('AdminService', () => {
  let service: AdminService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
