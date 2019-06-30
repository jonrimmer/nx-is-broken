import { Entity, ManyToOne, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Author } from './author.entity';

@Entity()
export class Todo {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Author, author => author.todos)
  author: Author;

  @OneToMany(() => Comment, comment => comment.todo)
  comments: Comment[];
}
