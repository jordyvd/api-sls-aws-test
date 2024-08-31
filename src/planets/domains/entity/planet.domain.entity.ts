import { v4 as uuidv4 } from 'uuid';

export interface IPlanet {
    id: string;
    clima: string;
    diámetro: string;
    gravedad: string;
    nombre: string;
    período_orbital: string;
    población: string;
    residentes: string[];
    periodo_de_rotación: string;
    agua_superficial: string;
    terreno: string;
    url: string;
}

export class Planet {
    constructor(private attributes: IPlanet) {}

    static create(CreatePlanet: Omit<IPlanet, 'id'>): Planet {
        return new Planet({
            id: uuidv4(),
            clima: CreatePlanet.clima,
            diámetro: CreatePlanet.diámetro,
            gravedad: CreatePlanet.gravedad,
            nombre: CreatePlanet.nombre,
            período_orbital: CreatePlanet.período_orbital,
            población: CreatePlanet.población,
            residentes: CreatePlanet.residentes,
            periodo_de_rotación: CreatePlanet.periodo_de_rotación,
            agua_superficial: CreatePlanet.agua_superficial,
            terreno: CreatePlanet.terreno,
            url: CreatePlanet.url
        });
    }

    toValue(): IPlanet {
        return this.attributes;
    }
}