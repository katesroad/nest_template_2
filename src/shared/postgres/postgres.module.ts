import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { PostgresConfig } from './postgres.config';
import { PgUserModule } from './pg-user/pg-user.module';

/**
 * Tutorial:
 * >1. https://docs.nestjs.com/techniques/configuration
 * >2. https://www.youtube.com/watch?v=dZd9tZe5w3M
 */
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useClass: PostgresConfig,
    }),
    PgUserModule,
  ],
})
export class PostgresModule {}
