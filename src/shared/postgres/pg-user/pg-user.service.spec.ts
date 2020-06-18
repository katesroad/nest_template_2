import { Test, TestingModule } from '@nestjs/testing';
import { PgUserService } from './pg-user.service';

describe('PgUserService', () => {
  let service: PgUserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PgUserService],
    }).compile();

    service = module.get<PgUserService>(PgUserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
