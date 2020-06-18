import { Entity, Column } from 'typeorm';
import { AbstractEntity } from './abstract.entity';

@Entity('users')
export class UserEntity extends AbstractEntity {
  @Column('tetx')
  username: string;
}
