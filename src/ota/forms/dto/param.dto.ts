import { IsString } from "class-validator";

export class VehAvailRateRQCoreDto {
    @IsString()
    status: string;
    rentalCore: RentalCore;
    vendorPrefs: VendorPref;
    vehPrefs: VehPref;
    equipPrefs: EquipPref;
}

export class RentalCore {
    @IsString()
    picDatetime: string;
    @IsString()
    retDatetime: string;
    @IsString()
    picLocationCd: string;
    @IsString()
    retLocationCd: string;
}

export class VendorPref {
    @IsString()
    companyName: string;
    @IsString()
    code: string;
    @IsString()
    preLevel: string;
}

export class VehPref {
    @IsString()
    airConditionInd: string;
    @IsString()
    transmissionType: string;
    @IsString()
    airConditionPref: string;
    @IsString()
    transmissionPref: string;
    @IsString()
    vehCategory: string;
    @IsString()
    doorCount: string;
    @IsString()
    size: string;
}

export class EquipPref {
    @IsString()
    equipType: string;
    @IsString()
    quantity: string;
}

export class VehAvailRateRQInfoDto {
    person: Person;
    attrival: Attrival;
}

export class Person {
    @IsString()
    givenName: string;
    @IsString()
    surname: string;
}

export class Attrival {
    @IsString()
    attrival: string;
    @IsString()
    number: string;
    @IsString()
    code: string;

}