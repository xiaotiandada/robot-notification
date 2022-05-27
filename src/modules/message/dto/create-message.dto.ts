import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateMessageDto {
  @ApiPropertyOptional()
  @IsNotEmpty()
  @MaxLength(100)
  @IsString()
  type: string;

  @ApiPropertyOptional()
  @IsNotEmpty()
  @IsString()
  content: string;
}
