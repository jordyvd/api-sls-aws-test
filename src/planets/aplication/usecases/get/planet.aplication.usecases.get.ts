import { PlanetDomainRepository } from "../../../domains/repository/planet.domain.repository";
import { PlanetUseCaseGetDto } from "./planet.aplication.usecases.get.dto";
import { IPlanet, Planet } from "../../../domains/entity/planet.domain.entity";

export class PlanetUseCaseGet{
    constructor(private readonly planetDomainRepository: PlanetDomainRepository) {}

    async execute(dto: PlanetUseCaseGetDto): Promise<IPlanet[]> {
        return await this.planetDomainRepository.get(dto);
    }
}