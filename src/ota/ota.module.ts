import { Module } from '@nestjs/common';
import { OtaService } from './ota.service';
import { OtaController } from './ota.controller';

@Module({
  providers: [OtaService],
  controllers: [OtaController]
})
export class OtaModule {}
