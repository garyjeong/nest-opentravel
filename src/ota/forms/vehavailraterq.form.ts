import { attr } from '../utils/common.util';
import { POS } from './common.form';
import { VehAvailRateRQCoreDto, VehAvailRateRQInfoDto } from './dto/param.dto';
import { RequestForms } from './form.abstract';

export class VehAvailRateRQ extends RequestForms {
    constructor() {
        super('VehAvailRateRQ');
    }

    async RequestHeader(): Promise<any> {
        return {
            [super._tag]: {
               'xmlns': 'http://www.opentravel.org/OTA/2003/05',
               'xmlns:xsi': 'http://www.w3.org/2001/XMLSchema-instance',
               'xsi:schemaLocation': 'http://www.opentravel.org/OTA/2003/05 OTA_VehAvailRateRQ.xsd',
               'Version': '1.002'
            }
        }
    }

    async RequestPOS(): Promise<any> {
        return {
            POS: POS
        }
    }

    async RequestCore(data: VehAvailRateRQCoreDto): Promise<any> {
        return {
            VehAvailRQCore: {
                [attr('Status')]: data.status,
                VehRentalCore: {
                    [attr('PickUpDateTime')]: data.rentalCore.picDatetime,
                    [attr('ReturnDateTime')]: data.rentalCore.retDatetime,
                    PickUpLocation: {
                        [attr('LocationCode')]: data.rentalCore.picLocationCd,
                    },
                    ReturnLocation: {
                        [attr('LocationCode')]: data.rentalCore.retLocationCd,
                    }
                },
                VendorPrefs: {
                    VendorPref: {
                        [attr('CompanyShortName')]: data.vendorPrefs.companyName,
                        [attr('Code')]: data.vendorPrefs.code,
                        [attr('PreferLevel')]: data.vendorPrefs.preLevel,
                    }
                },
                VehPrefs: {
                    VehPref: {
                        [attr('AirConditionInd')]: data.vehPrefs.airConditionInd,
                        [attr('TransmissionType')]: data.vehPrefs.transmissionType,
                        [attr('AirConditionPref')]: data.vehPrefs.airConditionPref,
                        [attr('TransmissionPref')]: data.vehPrefs.transmissionPref,
                        VehType: {
                            [attr('VehicleCategory')]: data.vehPrefs.vehCategory,
                            [attr('DoorCount')]: data.vehPrefs.doorCount,
                        },
                        VehClass: {
                            [attr('Size')]: data.vehPrefs.size,
                        }
                    }
                },
                SpecialEquipPrefs: {
                    SpecialEquipPref: {
                        [attr('EquipType')]: data.equipPrefs.equipType,
                        [attr('Quantity')]: data.equipPrefs.quantity,
                    }
                }
            }
        }
    }

    async RequestInfo(data: VehAvailRateRQInfoDto): Promise<any> {
        return {
            VehAvailRQInfo: {
                Customer: {
                    Primary: {
                        PersonName: {
                            GivenName: data.person.givenName,
                            Surname: data.person.surname
                        }
                    }
                },
                ArrivalDetails: {
                    [attr('TransportationCode')]: data.attrival.code,
                    [attr('Number')]: data.attrival.number,
                    OperatingCompany: {
                        [attr('Code')]: data.attrival.code,
                    }
                }
            }
        }
    }
}