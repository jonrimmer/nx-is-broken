import { Entity, PrimaryGeneratedColumn, OneToMany, ManyToOne } from 'typeorm';
import { Author } from './author.entity';
import { Todo } from './todo.entity';

@Entity()
export class Comment {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Author, author => author.comments)
  author: Author;

  @OneToMany(() => Todo, todo => todo.comments)
  todo: Todo;
}
