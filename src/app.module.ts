import 'dotenv/config';
import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SalesController } from './sales/sales.controller';
import { SalesModule } from './sales/sales.module';
import { SalesService } from './sales/sales.service';

@Module({
  imports: [
    SalesModule,
    MulterModule.register({
      dest: __dirname + '/public',
    }),
    TypeOrmModule.forRoot(),
  ],
  controllers: [AppController, SalesController],
  providers: [AppService, SalesService],
})
export class AppModule {}
