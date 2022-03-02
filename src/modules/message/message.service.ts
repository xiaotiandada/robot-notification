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
    const messages = await this.messageRepository.find({
      select: ['content', 'createdAt'],
      order: {
        createdAt: 'DESC',
      },
    });
    const messagesCount = await this.messageRepository.count();

    return {
      data: messages,
      meta: {
        itemCount: messages.length,
        totalItems: messagesCount,
      },
    };
  }

  createMessage(createMessageDto: CreateMessageDto): Promise<MessageEntity> {
    const message = new MessageEntity();
    message.content = createMessageDto.content;

    return this.messageRepository.save(message);
  }
}
