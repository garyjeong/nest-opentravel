import { POS } from "./common.form";


export class RequestForms {
    protected _tag: string;

    constructor(tag: string) {
        this._tag = 'OTA_'.concat(tag);
    }

    async RequestPOS(): Promise<any> {
        return {}
    }

    async RequestCore(data: any): Promise<any> {
        return {};
    }

    async RequestInfo(data: any): Promise<any> {
        return {};
    }
}