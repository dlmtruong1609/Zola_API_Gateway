# CHAT ZOLA

This is application api gateway and authencation
# # Quick start
### Prerequisites

1. Git
- Run with single
2. Node: any 10.x version starting with v10.0.0 or greater
3. Npm: See [here](https://www.npmjs.com/)
- Run with Docker
4. Docker: See [here](https://www.docker.com/get-started)
5. Docker Compose: See [here](https://docs.docker.com/compose/install/)
### Run with docker(Microservice)
1. `mkdir ChatZola && cd ChatZola`
2. Get all project
`git clone https://gitlab.com/chatonline/api-account-chat`
`git clone https://gitlab.com/chatonline/api-phonebook-chat`
`git clone https://gitlab.com/chatonline/api-room-chat`
`git clone https://gitlab.com/chatonline/api-gateway-chat`
3. Create .env for each service with env.example
4. `cd api-gateway-chat`
5. `docker-compose up -d`
6. `docker-compose logs -f` to logs info request on server

### Or Run single
1. `git clone https://gitlab.com/chatonline/api-gateway-chat`
2. `npm install`
3. Change info in .env with env.example
4. `npm run dev` with dev or `npm start` with pm2 

## System architecture
![Microservice](https://minhtruong.s3.ap-southeast-1.amazonaws.com/bdf13b73-9ce2-468e-a0e8-64e3003070e2.png)
