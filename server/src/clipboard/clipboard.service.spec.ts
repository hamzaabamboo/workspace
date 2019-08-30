import { Test, TestingModule } from '@nestjs/testing';
import { ClipboardService } from './clipboard.service';

describe('ClipboardService', () => {
  let service: ClipboardService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ClipboardService],
    }).compile();

    service = module.get<ClipboardService>(ClipboardService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
