import { Module } from '@nestjs/common';
import { MessageSchemaService } from './message-schema.service';
import { MessageSchemaResolver } from './message-schema.resolver';

@Module({
  providers: [MessageSchemaResolver, MessageSchemaService]
})
export class MessageSchemaModule {}
