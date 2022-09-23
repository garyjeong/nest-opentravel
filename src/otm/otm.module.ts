import { Module } from '@nestjs/common';
import { OtmService } from './otm.service';
import { OtmController } from './otm.controller';

@Module({
  providers: [OtmService],
  controllers: [OtmController]
})
export class OtmModule {}
