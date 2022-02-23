import { Injectable } from '@nestjs/common';

@Injectable()
export class MessageService {
  getMessages(): string {
    return 'messages v1';
  }

  createMessage(): string {
    return 'success v1';
  }
}
