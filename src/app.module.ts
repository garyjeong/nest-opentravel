import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OtaModule } from './ota/ota.module';

@Module({
  imports: [OtaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
