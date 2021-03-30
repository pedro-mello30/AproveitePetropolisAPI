import { Test, TestingModule } from '@nestjs/testing';
import { CategoriaService } from './categoria.service';

describe('CategoriaService', () => {
  let provider: CategoriaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CategoriaService],
    }).compile();

    provider = module.get<CategoriaService>(CategoriaService);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
