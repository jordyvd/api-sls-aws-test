import { AwsTranslate } from "./aws.translate";

export class AwsTranslateReadJson {
    static async readJson(json): Promise<any> {
        console.log(json);
        try {
            const properties = Object.keys(json);

            for (let i = 0; i < properties.length; i++) {

                let property = await AwsTranslate.translateText(properties[i]);

                property = property.replace(/\s/g, '_');
                
                json[property] = json[properties[i]];
            }

            return json;

        } catch {
            throw new Error('Error reading json');
        }
    }
}