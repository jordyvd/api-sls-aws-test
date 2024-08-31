import { Planet, IPlanet } from "../entity/planet.domain.entity";

export abstract class PlanetDomainRepository {
  abstract create(planet: Planet): Promise<IPlanet>;
  abstract get({id}: {id: string | null}): Promise<IPlanet[]>;
}