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
}
