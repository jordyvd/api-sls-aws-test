import { Planet, IPlanet } from "../../domains/entity/planet.domain.entity";
import { PlanetDomainRepository } from "../../domains/repository/planet.domain.repository";
import { DynamoDBClient, QueryCommand, ScanCommand } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, PutCommand } from "@aws-sdk/lib-dynamodb";

export class PlanetInfrastructureRepository extends PlanetDomainRepository {

  private client = new DynamoDBClient();
  private docClient = DynamoDBDocumentClient.from(this.client);

  async create(planet: Planet): Promise<IPlanet> {
    
    const params = {
        TableName: "Planets",
        Item: planet.toValue(),
    };

    const command = new PutCommand(params);
    
    await this.docClient.send(command);

    return planet.toValue();
  }

  async get(): Promise<IPlanet[]> {
    
    const params = {
        TableName: "Planets",
        ConsistentRead: true,
    };
    
    const command = new QueryCommand(params);
    const data = await this.docClient.send(command);
    return data.Items as unknown as IPlanet[];
  }
}