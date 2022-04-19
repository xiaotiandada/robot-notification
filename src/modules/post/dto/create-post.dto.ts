import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreatePostDto {
  @ApiProperty({ description: 'title' })
  @IsString()
  readonly title: string;

  @ApiProperty({ description: 'description' })
  @IsString()
  readonly description: string;
}
