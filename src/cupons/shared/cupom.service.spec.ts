import { Test, TestingModule } from '@nestjs/testing';
import { CupomService } from './cupom.service';

describe('CupomService', () => {
  let provider: CupomService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CupomService],
    }).compile();

    provider = module.get<CupomService>(CupomService);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
