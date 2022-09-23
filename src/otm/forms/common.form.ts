import { attr } from "../utils/common.util";

export const xmlHeader = (): Object => {
    return {
        '?xml': {
            [attr('version')]: '1.0',
            [attr('encoding')]: 'utf-16'
        }
    }
}

export const Source = (CP, VN, VC): Object => {
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

export const RequestID = (type, id): Object => {
    return {
        RequestorID: {
            [attr('Type')]: type,
            [attr('ID')]: id
        }
    }
}