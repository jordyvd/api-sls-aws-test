import { Request, Response } from "express";
import { PlanetUseCaseCreate } from "../../../aplication/usecases/create/planet.aplication.usecases.create";
import { PlanetControllerCreateDto } from "./planet.infrastructure.controllers.create.dto";
import { PlanetInfrastructureRepository } from "../../repository/planet.infrastructure.repository";
import { plainToInstance } from 'class-transformer';
import { AwsTranslateReadJson } from '../../aws/translate/aws.translate.read.json';
import { validate } from "class-validator";

export class PlanetControllerCreate {
    private planetUseCaseCreate: PlanetUseCaseCreate;

    constructor(){
        this.planetUseCaseCreate = new PlanetUseCaseCreate(new PlanetInfrastructureRepository());
    }

    async execute(req: Request, res: Response) {
        try{
            const params = await AwsTranslateReadJson.readJson(req.body);
            const dto = plainToInstance(PlanetControllerCreateDto, params);
            validate(dto).then(errors => {
                if (errors.length > 0) {
                    return res.status(400).json({
                        message: 'Bad Request',
                        errors: errors.map(error => error.constraints),
                    });
                }
            });
            const planet = await this.planetUseCaseCreate.execute(dto);
            return res.status(201).json({
                message: 'Planet created',
                planet,
            });
        }catch(Error){
            return res.status(500).json({
                message: Error.message,
            });
        }
    }
}