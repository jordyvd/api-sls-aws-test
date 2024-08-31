import {Request, Response} from 'express';
import { PlanetUseCaseGet } from '../../../aplication/usecases/get/planet.aplication.usecases.get';
import { PlanetControllerGetDto } from './planet.infrastructure.controllers.get.dto';
import { PlanetInfrastructureRepository } from '../../repository/planet.infrastructure.controller.repository';
import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';

export class PlanetControllerGet {
    private planetUseCaseGet: PlanetUseCaseGet;

    constructor() {
        this.planetUseCaseGet = new PlanetUseCaseGet(new PlanetInfrastructureRepository());
    }

    async execute(req: Request, res: Response) {
        try {
            const dto = plainToInstance(PlanetControllerGetDto, req.body);
            validate(dto).then(errors => {
                if (errors.length > 0) {
                    return res.status(400).json({
                        message: 'Bad Request',
                        errors: errors.map(error => error.constraints),
                    });
                }
            });
            const planets = await this.planetUseCaseGet.execute(dto);
            return res.status(200).json({
                message: 'Planets found',
                planets,
            });
        } catch {
            return res.status(500).json({
                message: 'Internal Server Error',
            });
        }
    }
}