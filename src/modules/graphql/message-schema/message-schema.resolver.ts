import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { MessageSchemaService } from './message-schema.service';
import { CreateMessageSchemaInput } from './dto/create-message-schema.input';
import { UpdateMessageSchemaInput } from './dto/update-message-schema.input';

@Resolver('MessageSchema')
export class MessageSchemaResolver {
  constructor(private readonly messageSchemaService: MessageSchemaService) {}

  @Mutation('createMessageSchema')
  create(@Args('createMessageSchemaInput') createMessageSchemaInput: CreateMessageSchemaInput) {
    return this.messageSchemaService.create(createMessageSchemaInput);
  }

  @Query('messageSchema')
  findAll() {
    return this.messageSchemaService.findAll();
  }

  @Query('messageSchema')
  findOne(@Args('id') id: number) {
    return this.messageSchemaService.findOne(id);
  }

  @Mutation('updateMessageSchema')
  update(@Args('updateMessageSchemaInput') updateMessageSchemaInput: UpdateMessageSchemaInput) {
    return this.messageSchemaService.update(updateMessageSchemaInput.id, updateMessageSchemaInput);
  }

  @Mutation('removeMessageSchema')
  remove(@Args('id') id: number) {
    return this.messageSchemaService.remove(id);
  }
}
