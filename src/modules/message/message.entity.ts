import { Column, Entity } from 'typeorm';

import { AbstractEntity } from '../../common/abstract.entity';
// import { UseDto } from '../../decorators';
// import { CreateMessageDto } from './dtos/create-message.dto';

@Entity({ name: 'message' })
// @UseDto(CreateMessageDto)
export class MessageEntity extends AbstractEntity {
  @Column()
  content: string;
}
