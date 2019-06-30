import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Todo } from './todo.entity';
import { Author } from './author.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      entities: [Author, Todo, Comment]
    })
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
