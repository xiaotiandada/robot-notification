import { Controller, Get, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { MessageService } from './message.service';

@Controller('messages')
@ApiTags('messages')
export class MessageController {
  constructor(private messageService: MessageService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  getMessages(): string {
    return this.messageService.getMessages();
  }

  @Post()
  createMessage() {
    return this.messageService.createMessage();
  }
}
