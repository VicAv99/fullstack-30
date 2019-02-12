import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeCoreModule } from './core/sequelize/sequelize-core.module';

@Module({
  imports: [SequelizeCoreModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
