import { ObjectType, Field } from '@nestjs/graphql';
import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Column,
} from 'typeorm';

@ObjectType()
@Entity({ name: 'message' })
export class Message {
  @Field(() => String, { description: 'Id' })
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field(() => String, { description: 'type' })
  @Column({ length: 100 })
  type: string;

  @Field(() => String, { description: 'content' })
  @Column('text')
  content: string;

  @Field(() => Date, { description: 'createdAt' })
  @CreateDateColumn({
    type: 'timestamp',
  })
  createdAt: Date;

  @Field(() => Date, { description: 'updatedAt' })
  @UpdateDateColumn({
    type: 'timestamp',
  })
  updatedAt: Date;
}
