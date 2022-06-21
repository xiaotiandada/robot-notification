import { Injectable } from '@nestjs/common';
import { CreateMessageSchemaInput } from './dto/create-message-schema.input';
import { UpdateMessageSchemaInput } from './dto/update-message-schema.input';

@Injectable()
export class MessageSchemaService {
  create(createMessageSchemaInput: CreateMessageSchemaInput) {
    return 'This action adds a new messageSchema';
  }

  findAll() {
    return `This action returns all messageSchema`;
  }

  findOne(id: number) {
    return `This action returns a #${id} messageSchema`;
  }

  update(id: number, updateMessageSchemaInput: UpdateMessageSchemaInput) {
    return `This action updates a #${id} messageSchema`;
  }

  remove(id: number) {
    return `This action removes a #${id} messageSchema`;
  }
}
