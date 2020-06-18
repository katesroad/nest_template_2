import { Module } from '@nestjs/common';
import { PgUserService } from './pg-user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from '../../../entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  providers: [PgUserService],
  exports: [PgUserService],
})
export class PgUserModule {}
