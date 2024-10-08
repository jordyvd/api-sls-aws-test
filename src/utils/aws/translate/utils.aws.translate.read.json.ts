import { AwsTranslate } from "./utils.aws.translate";

export class AwsTranslateReadJson {
    
    static async readJson(json: any): Promise<any> {
        try {
            const properties = Object.keys(json);

            const transformedJson: any = {};

            for (let i = 0; i < properties.length; i++) {

                let property = await AwsTranslate.translateText(properties[i]);

                property = property.replace(/\s/g, '_');
                
                transformedJson[property] = json[properties[i]];
            }

            return transformedJson;

        } catch {
            throw new Error('Error reading json');
        }
    }
}