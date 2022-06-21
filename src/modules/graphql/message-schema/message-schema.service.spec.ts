import { Test, TestingModule } from '@nestjs/testing';
import { MessageSchemaService } from './message-schema.service';

describe('MessageSchemaService', () => {
  let service: MessageSchemaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MessageSchemaService],
    }).compile();

    service = module.get<MessageSchemaService>(MessageSchemaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
