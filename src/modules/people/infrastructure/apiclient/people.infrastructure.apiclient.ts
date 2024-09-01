import fetch from 'node-fetch';
import { AwsTranslateReadJson } from '@/utils/aws/translate/utils.aws.translate.read.json';

export class PlanetInfrastructureApiClient {
    
    async execute(id: number | null) {

        const url = `https://swapi.dev/api/people/${id ?? ''}`;
        const response = await fetch(url);

        const data = await response.json();
        
        if(id !== null){
            return await AwsTranslateReadJson.readJson(data);
        }

        return [];
    }
}