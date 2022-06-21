import { CreateMessageInput } from './create-message.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';
import { IsNotEmpty, IsUUID } from 'class-validator';

@InputType()
export class UpdateMessageInput extends PartialType(CreateMessageInput) {
  @Field(() => String, { description: 'Id' })
  @IsUUID()
  @IsNotEmpty()
  id: string;
}
