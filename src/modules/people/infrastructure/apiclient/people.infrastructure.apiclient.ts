import fetch from 'node-fetch';
import { AwsTranslateReadJson } from '@/utils/aws/translate/utils.aws.translate.read.json';

export class PlanetInfrastructureApiClient {
    
    async execute(id: number) {
        const url = `https://swapi.dev/api/people/${id}/`;
        const response = await fetch(url);

        let data: any = await response.json();
        
        return await AwsTranslateReadJson.readJson(data);
    }
}