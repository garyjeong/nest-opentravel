export class VehAvailRateRqDto {
    core: VehAvailRateCore;
    info: VehAvailRateInfo;
}

export class VehAvailRateCore {
    status: string;
    pickupTime: string;
    returnTime: string;
    pickupLocation: string;
    returnLocation: string;
    companyName: string;
    code: string;
    preferLevel: string;
    airConditionInd: string;
    transmissionType: string;
    airConditionPref: string;
    transmissionPref: string;
    vehicleCategory: string;
    doorCount: string;
    size: string;
    equipType: string;
    quantity: string;
}

export class VehAvailRateInfo {
    givenName: string;
    surname: string;
    tranportationCode: string;
    number: string;
    code: string;
}