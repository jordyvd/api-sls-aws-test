import { IsUUID, IsEmpty } from "class-validator";

export class PlanetControllerGetDto {
    @IsUUID()
    @IsEmpty()
    id: string;
}