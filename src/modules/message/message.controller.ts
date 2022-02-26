import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { CreateMessageDto } from './dtos/create-message.dto';
import { MessageService } from './message.service';

@Controller('messages')
@ApiTags('messages')
export class MessageController {
  constructor(private messageService: MessageService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  getMessages() {
    return this.messageService.getMessages();
  }

  @Post()
  createMessage(@Body() createMessageDto: CreateMessageDto) {
    return this.messageService.createMessage(createMessageDto);
  }
}
