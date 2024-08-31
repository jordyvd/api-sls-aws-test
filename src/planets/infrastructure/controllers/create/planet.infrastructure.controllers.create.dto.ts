import { IsString, IsNotEmpty, IsArray } from 'class-validator';

export class PlanetControllerCreateDto {
    @IsString()
    @IsNotEmpty()
    clima: string;

    @IsString()
    @IsNotEmpty()
    diámetro: string;

    @IsString()
    @IsNotEmpty()
    gravedad: string;

    @IsString()
    @IsNotEmpty()
    nombre: string;

    @IsString()
    @IsNotEmpty()
    población: string;

    @IsArray()
    residentes: string[];

    @IsString()
    @IsNotEmpty()
    período_orbital: string;

    @IsString()
    @IsNotEmpty()
    periodo_de_rotación: string;
    
    @IsString()
    @IsNotEmpty()
    agua_superficial: string;

    @IsString()
    @IsNotEmpty()
    terreno: string;

    @IsString()
    @IsNotEmpty()
    url: string;
}
