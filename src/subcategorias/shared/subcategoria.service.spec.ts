import { Test, TestingModule } from '@nestjs/testing';
import { SubcategoriaService } from './subcategoria.service';

describe('SubcategoriaService', () => {
  let provider: SubcategoriaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SubcategoriaService],
    }).compile();

    provider = module.get<SubcategoriaService>(SubcategoriaService);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
