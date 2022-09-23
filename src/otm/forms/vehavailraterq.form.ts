import { VehAvailRateCore, VehAvailRateInfo, VehAvailRateRqDto } from "../dto/vehavailraterq.dto";
import { attr } from "../utils/common.util";
import { Source, xmlHeader } from "./common.form";

export class VehAvailRateRq {
    private _tag: string = '';

    constructor(tag: string) {
        this._tag = 'OTA_'.concat(tag);
    }

    async RequestXMLForm(data: VehAvailRateRqDto): Promise<Object> {
        const [pos, core, info] = await Promise.all([
            this.RequestPOS(),
            this.RequestCore(data?.core),
            this.RequestInfo(data?.info)
        ]);
        
        const header = await xmlHeader();

        return {
            ...header,
            [this._tag]: {
                [attr('xmlns')]: 'http://www.opentravel.org/OTA/2003/05',
                [attr('xmlns:xsi')]: 'http://www.w3.org/2001/XMLSchema-instance',
                [attr('xsi:schemaLocation')]: 'http://www.opentravel.org/OTA/2003/05 OTA_VehAvailRateRQ.xsd',
                [attr('Version')]: '1.002',
                POS: pos, 
                VehAvailRQCore: core, 
                VehAvailRQInfo: info
            }
        }
    }

    private RequestPOS() {
        return Source('BDQB', 'X932', 'M9I13M3C12L')
    }

    private RequestCore(core: VehAvailRateCore) {
        return {
            VehAvailRQCore: {
                [attr('Status')]: core.status,
                VehRentalCore: {
                    [attr('PickUpDateTime')]: core.pickupTime,
                    [attr('ReturnDateTime')]: core.returnTime,
                    PickUpLocation: {
                        [attr('LocationCode')]: core.pickupLocation,
                    },
                    ReturnLocation: {
                        [attr('LocationCode')]: core.returnLocation,
                    }
                },
                VendorPrefs: {
                    VendorPref: {
                        [attr('CompanyShortName')]: core.companyName,
                        [attr('Code')]: core.code,
                        [attr('PreferLevel')]: core.preferLevel,
                    }
                },
                VehPrefs: {
                    VehPref: {
                        [attr('AirConditionInd')]: core.airConditionInd,
                        [attr('TransmissionType')]: core.transmissionType,
                        [attr('AirConditionPref')]: core.airConditionPref,
                        [attr('TransmissionPref')]: core.transmissionPref,
                        VehType: {
                            [attr('VehicleCategory')]: core.vehicleCategory,
                            [attr('DoorCount')]: core.doorCount,
                        },
                        VehClass: {
                            [attr('Size')]: core.size,
                        }
                    }
                },
                SpecialEquipPrefs: {
                    SpecialEquipPref: {
                        [attr('EquipType')]: core.equipType,
                        [attr('Quantity')]: core.quantity,
                    }
                }
            }
        }
    }

    private RequestInfo(info: VehAvailRateInfo) {
        return {
            VehAvailRQInfo: {
                Customer: {
                    Primary: {
                        PersonName: {
                            GivenName: info.givenName,
                            Surname: info.surname
                        }
                    }
                },
                ArrivalDetails: {
                    [attr('TransportationCode')]: info.code,
                    [attr('Number')]: info.number,
                    OperatingCompany: {
                        [attr('Code')]: info.code,
                    }
                }
            }
        }
    }
}