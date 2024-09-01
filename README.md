# Serverless Framework v4 Node Express API on AWS 
## DEVELOPER: Jordy Verastegui Dominguez

### Deployment

Instalar dependencias:

```
npm install
```

Implementar:

```
serverless deploy
```

Después de ejecutar la implementación, debería ver un resultado similar al siguiente:

```
Deploying "aws-node-express-dynamodb-api" to stage "dev" (us-east-1)

✔ Service deployed to stack aws-node-express-dynamodb-api-dev (109s)

endpoint: ANY - https://xxxxxxxxxx.execute-api.us-east-1.amazonaws.com
functions:
  api: aws-node-express-dynamodb-api-dev-api (3.8 MB)
```
## Uso

### Planets POST
Agrear registros en DynamoDB en la tabla PlanetsTable
- 
 - **Endpoint:** `/create/`
 - **Traducción:** Los atributos del json pasado por el body serán traducidos
 - **Body de la solicitud:**
 ```json
  {
    "climate": "Arid2",
    "diameter": "10465",
    "gravity": "1 standard",
    "name": "Tatooine",
    "population": "200000"
  }
 ```
  - **Respuesta:**
 ```json
  {
      "message": "Planet created",
      "planet": {
          "id": "13ff6c1c-9054-4937-9a83-79a0ce5ad2a9",
          "clima": "Arid2",
          "diámetro": "10465",
          "gravedad": "1 standard",
          "nombre": "Tatooine",
          "población": "200000"
      }
  }
 ```
