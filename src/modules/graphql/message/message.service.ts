import { CreateMessageInput } from './dto/create-message.input';
import { UpdateMessageInput } from './dto/update-message.input';
import { Repository } from 'typeorm';
import { Message } from './entities/message.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { HttpException, Injectable } from '@nestjs/common';

@Injectable()
export class MessageService {
  constructor(
    @InjectRepository(Message)
    private readonly messageRepository: Repository<Message>,
  ) {}

  async create(createMessageInput: CreateMessageInput): Promise<Message> {
    return await this.messageRepository.save(createMessageInput);
  }

  async findAll(): Promise<Message[]> {
    return await this.messageRepository.find({
      // select: ['content', 'createdAt'],
      order: {
        createdAt: 'DESC',
      },
    });
  }

  async findOne(id: string): Promise<Message> {
    return await this.messageRepository.findOne({
      id,
    });
  }

  async update(
    id: string,
    updateMessageInput: UpdateMessageInput,
  ): Promise<Message> {
    await this.messageRepository.update(id, updateMessageInput);
    return await this.messageRepository.findOne({ id });
  }

  async remove(id: string): Promise<Message> {
    const existMessage = await this.messageRepository.findOne({
      id: id,
    });
    if (!existMessage) {
      throw new HttpException(`Article with id ${id} does not exist`, 404);
    }
    await this.messageRepository.delete(id);
    return existMessage;
  }
}
