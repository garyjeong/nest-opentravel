import { attr } from '../utils/common.util';

export const XmlHeader = async (): Promise<Object> => {
    return {
        '?xml': {
            [attr('version')]: '1.0',
            [attr('encoding')]: 'utf-8',
        }
    }
}

export const POS = async (): Promise<Object> => {
    const CP: string = process.env.ACCESS_CODE_CP;
    const VN: string = process.env.ACCESS_CODE_VN;
    const VC: string = process.env.ACCESS_CODE_VC;

    return {
        Source: {
            RequesterID: {
                CompanyName: {
                    [attr('Code')]: 'CP',
                    [attr('CodeContext')]: CP
                },
                [attr('Type')]: '4',
                [attr('ID')]: VN
            },
            [attr('ISOCountry')]: 'KR',
            [attr('AgentDutyCode')]: VC
        }
    }
}