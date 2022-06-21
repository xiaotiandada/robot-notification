import { Injectable } from '@nestjs/common';
import { CreateMessageInput } from './dto/create-message.input';
import { UpdateMessageInput } from './dto/update-message.input';
import { Repository } from 'typeorm';
import { Message } from './entities/message.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class MessageService {
  constructor(
    @InjectRepository(Message)
    private readonly messageRepository: Repository<Message>,
  ) {}

  create(createMessageInput: CreateMessageInput) {
    return 'This action adds a new message';
  }

  async findAll(): Promise<Message[]> {
    return await this.messageRepository.find({
      // select: ['content', 'createdAt'],
      order: {
        createdAt: 'DESC',
      },
    });
  }

  async findOne(id: number): Promise<Message> {
    // return `This action returns a #${id} message`;
    const message = new Message();
    message.id = String(id);
    message.type = 'test';
    message.content = 'test';
    message.createdAt = new Date();
    message.updatedAt = new Date();

    return message;
  }

  update(id: string, updateMessageInput: UpdateMessageInput) {
    return `This action updates a #${id} message`;
  }

  remove(id: number) {
    return `This action removes a #${id} message`;
  }
}
