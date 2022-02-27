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

  async getMessages(): Promise<{
    data: MessageEntity[];
    meta: { itemCount: number; totalItems: number };
  }> {
    const messages = await this.messageRepository.find();

    return {
      data: messages,
      meta: {
        itemCount: messages.length,
        totalItems: messages.length,
      },
    };
  }

  createMessage(createMessageDto: CreateMessageDto): Promise<MessageEntity> {
    const message = new MessageEntity();
    message.content = createMessageDto.content;

    return this.messageRepository.save(message);
  }
}
