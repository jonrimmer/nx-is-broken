import { Injectable } from '@nestjs/common';
import { Message } from '@nx-is-broken/api-interface';

@Injectable()
export class AppService {
  getData(): Message {
    return { message: 'Welcome to api!' };
  }
}
