import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from '../../../entities/user.entity';

@Injectable()
export class PgUserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepo: Repository<UserEntity>,
  ) {}

  async findOne(filter: any) {
    return this.userRepo.findOne(filter).then((user) => {
      if (user) return user;
      throw new BadRequestException(`Can't find a user with condition: ${JSON.stringify(filter)}`);
    })
  }
}
