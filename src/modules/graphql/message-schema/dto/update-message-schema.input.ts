import { CreateMessageSchemaInput } from './create-message-schema.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateMessageSchemaInput extends PartialType(CreateMessageSchemaInput) {
  id: number;
}
