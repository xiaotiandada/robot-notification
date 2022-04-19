import { CommandHandler, ICommand, ICommandHandler } from '@nestjs/cqrs';
import { Repository } from 'typeorm';
import { CreatePostDto } from '../dto/create-post.dto';
import { PostEntity } from '../entities/post.entity';
import { PostRepository } from '../post.repository';

export class CreatePostCommand {
  constructor(public readonly createPostDto: CreatePostDto) {}
}

@CommandHandler(CreatePostCommand)
export class CreatePostHandler implements ICommandHandler<CreatePostCommand> {
  constructor(private postRepository: Repository<PostEntity>) {}

  async execute(command: CreatePostCommand): Promise<PostEntity> {
    return await this.postRepository.save(command.createPostDto);
  }
}
