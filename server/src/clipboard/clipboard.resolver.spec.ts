import { Test, TestingModule } from '@nestjs/testing';
import { ClipboardResolver } from './clipboard.resolver';

describe('ClipboardResolver', () => {
  let resolver: ClipboardResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ClipboardResolver],
    }).compile();

    resolver = module.get<ClipboardResolver>(ClipboardResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
