import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Db, getRepository, Repository } from 'typeorm';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PostEntity } from './entities/post.entity';
import { PostRepository } from './post.repository';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(PostEntity)
    private readonly postsRepository: PostRepository,
  ) {}

  async create(createPostDto: CreatePostDto): Promise<PostEntity> {
    return await this.postsRepository.save(createPostDto);
  }

  async findAll(query: { page: number; size: number }) {
    console.log('query', query);

    const qb = await getRepository(PostEntity).createQueryBuilder('post');
    qb.orderBy('post.id', 'DESC');

    const count = await qb.getCount();
    const { page = 1, size = 10 } = query;

    qb.limit(size);
    qb.offset(size * (page - 1));

    const posts = await qb.getMany();

    return {
      list: posts,
      count,
    };
  }

  async findOne(id: number): Promise<PostEntity> {
    console.log('id', id);
    return await this.postsRepository.findOne({ where: { id } });
  }

  async update(id: number, updatePostDto: UpdatePostDto) {
    const existPost = await this.postsRepository.findOne({ where: { id } });
    if (!existPost) {
      throw new HttpException('Post not found', 404);
    }
    const updatePost = await this.postsRepository.merge(
      existPost,
      updatePostDto,
    );
    return await this.postsRepository.save(updatePost);
  }

  async remove(id: number) {
    const existPost = await this.postsRepository.findOne({ where: { id } });
    if (!existPost) {
      throw new HttpException('Post not found', 404);
    }
    return await this.postsRepository.remove(existPost);
  }
}
