import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

// import { AbstractDto } from '../../../common/dto/abstract.dto';

export class CreateMessageDto {
  @ApiPropertyOptional()
  @IsNotEmpty()
  @IsString()
  content: string;
}
