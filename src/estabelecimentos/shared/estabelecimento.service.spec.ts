import { Test, TestingModule } from '@nestjs/testing';
import { EstabelecimentoService } from './estabelecimento.service';

describe('EstabelecimentoService', () => {
  let provider: EstabelecimentoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EstabelecimentoService],
    }).compile();

    provider = module.get<EstabelecimentoService>(EstabelecimentoService);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
