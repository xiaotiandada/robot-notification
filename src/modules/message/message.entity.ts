import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

// import { AbstractEntity } from '../../common/abstract.entity';
import { UseDto } from '../../decorators';
import { CreateMessageDto } from './dtos/create-message.dto';

@Entity({ name: 'message' })
@UseDto(CreateMessageDto)
export class MessageEntity {
  @PrimaryGeneratedColumn('uuid')
  id: Uuid;

  @Column()
  content: string;

  @CreateDateColumn({
    type: 'timestamp',
  })
  createdAt: Date;

  @UpdateDateColumn({
    type: 'timestamp',
  })
  updatedAt: Date;
}
