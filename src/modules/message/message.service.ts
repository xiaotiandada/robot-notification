import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import type { CreateMessageDto } from './dtos/create-message.dto';
import { MessageEntity } from './message.entity';

@Injectable()
export class MessageService {
  constructor(
    @InjectRepository(MessageEntity)
    private messageRepository: Repository<MessageEntity>,
  ) {}

  getMessages(): Promise<MessageEntity[]> {
    return this.messageRepository.find();
  }

  createMessage(createMessageDto: CreateMessageDto): Promise<MessageEntity> {
    const message = new MessageEntity();
    message.content = createMessageDto.content;

    return this.messageRepository.save(message);
  }
}
