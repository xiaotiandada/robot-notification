import { InputType, Field } from '@nestjs/graphql';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

@InputType()
export class CreateMessageInput {
  @Field(() => String, { description: 'type' })
  @ApiPropertyOptional()
  @IsNotEmpty()
  @MaxLength(100)
  @IsString()
  type: string;

  @Field(() => String, { description: 'content' })
  @ApiPropertyOptional()
  @IsNotEmpty()
  @IsString()
  content: string;
}
