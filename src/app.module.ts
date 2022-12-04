import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './modules/accounts/user.module';
import { ConfigModule } from '@nestjs/config';
import { dataSourceOptions } from './infra/database/typeorm/data-source';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(dataSourceOptions),
    UserModule,
  ],
  providers: [],
})
export class AppModule {}
