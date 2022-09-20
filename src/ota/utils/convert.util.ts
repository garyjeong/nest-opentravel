import { XMLBuilder, XMLParser, XMLValidator } from "fast-xml-parser";

export const xml2json = async (data: string): Promise<string> => {
    try {
        if(!XMLValidator.validate(data)) {
            return;
        }
        const parser = new XMLParser({
            ignoreAttributes: false,
        });

        return parser.parse(data);
    } catch(e) {
        return e;
    }
}

export const json2xml = async (data: string): Promise<string> => {
    try {
        const json = JSON.parse(data);
        const options = {
            ignoreAttributes: false,
            format: true,
            suppressBooleanAttributes: false,
            suppressEmptyNode: true,
        }

        const builder = new XMLBuilder(options);
        return builder.build(json);
    } catch(e) {
        return e;
    }
}