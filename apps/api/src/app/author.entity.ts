import { Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Todo } from './todo.entity';
import { Comment } from './comment.entity';

@Entity()
export class Author {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(() => Todo, todo => todo.author)
  todos: Todo[];

  @OneToMany(() => Comment, comment => comment.author)
  comments: Comment[];
}
