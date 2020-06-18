import { Module } from '@nestjs/common';
import { PostgresModule } from './postgres/postgres.module';
import { HelperModule } from './helper/helper.module';

@Module({
  imports: [PostgresModule, HelperModule],
})
export class SharedModule {}
