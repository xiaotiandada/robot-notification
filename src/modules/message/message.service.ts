import { HttpException, Injectable } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';
import { Repository } from 'typeorm';
import { Message } from './entities/message.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class MessageService {
  constructor(
    @InjectRepository(Message)
    private readonly messageRepository: Repository<Message>,
  ) {}

  async create(createMessageDto: CreateMessageDto) {
    return {
      statusCode: 0,
      data: await this.messageRepository.save(createMessageDto),
      message: 'success',
    };
  }

  async findAll() {
    const messages = await this.messageRepository.find({
      // select: ['content', 'createdAt'],
      order: {
        createdAt: 'DESC',
      },
    });
    return {
      statusCode: 0,
      data: {
        item: messages,
        meta: {
          total: messages.length,
        },
      },
      message: 'success',
    };
  }

  async findOne(id: string) {
    return {
      statusCode: 0,
      data: await this.messageRepository.findOneBy({
        id: id,
      }),
      message: 'success',
    };
  }

  async update(id: string, updateMessageDto: UpdateMessageDto) {
    return {
      statusCode: 0,
      data: await this.messageRepository.update(id, updateMessageDto),
      message: 'success',
    };
  }

  async remove(id: string) {
    const existMessage = await this.messageRepository.findOneBy({
      id: id,
    });
    if (!existMessage) {
      throw new HttpException(`Article with id ${id} does not exist`, 404);
    }
    return {
      statusCode: 0,
      data: await this.messageRepository.remove(existMessage),
      message: 'success',
    };
  }
}
