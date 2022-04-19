import { PartialType } from '@nestjs/mapped-types';
import { CreatePostDto } from './create-post.dto';
import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdatePostDto extends PartialType(CreatePostDto) {
  @ApiProperty({ description: 'title' })
  @IsString()
  readonly title: string;

  @ApiProperty({ description: 'description' })
  @IsString()
  readonly description: string;
}
