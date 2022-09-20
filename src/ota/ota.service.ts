import { Injectable } from '@nestjs/common';
import { VehAvailRateRQCoreDto, VehAvailRateRQInfoDto } from './forms/dto/param.dto';
import { VehAvailRateRQ } from './forms/vehavailraterq.form';

@Injectable()
export class OtaService {
    constructor() {}

    async rqVehAvail(core: VehAvailRateRQCoreDto, info: VehAvailRateRQInfoDto) {
        const jsonRQ = new VehAvailRateRQ();
        const header = jsonRQ.getHeader();
        const t = jsonRQ.RequestCore(core);

        return {
            header: {
                [header]: {
                    
                }
            }    
        }
    }
}
