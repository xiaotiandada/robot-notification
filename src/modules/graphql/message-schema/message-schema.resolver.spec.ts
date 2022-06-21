import { Test, TestingModule } from '@nestjs/testing';
import { MessageSchemaResolver } from './message-schema.resolver';
import { MessageSchemaService } from './message-schema.service';

describe('MessageSchemaResolver', () => {
  let resolver: MessageSchemaResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MessageSchemaResolver, MessageSchemaService],
    }).compile();

    resolver = module.get<MessageSchemaResolver>(MessageSchemaResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
