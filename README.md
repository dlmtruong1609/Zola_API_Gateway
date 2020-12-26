# CHAT ZOLA

This is application api gateway and authencation
# # Demo: 
CHAT: `http://zolavn.cf`

# # Frontend Project
- Web application: `https://gitlab.com/chatonline/zola-client`
- Mobile application: `https://github.com/thanhtung5598/Mobile-FE-Zola.git`

If registration doesn't work because of running out of money, create an account with admin
- Admin Page `https://admin.zolavn.cf` 
  Phone: 0323456789
  Password: 123123
# # Server
## Quick start
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

`git clone https://github.com/dlmtruong1609/api-account-chat`

`git clone https://github.com/dlmtruong1609/api-phonebook-chat`

`git clone https://github.com/dlmtruong1609/api-room-chat`

`git clone https://github.com/dlmtruong1609/api-gateway-chat`

3. Create .env for each service with env.example

4. `cd api-gateway-chat`

5. `docker-compose up -d`

6. `docker-compose logs -f` to logs info request on server

7. Url: `http://localhost`

### Or Run single
1. `git clone https://github.com/dlmtruong1609/api-gateway-chat`
2. `npm install`
3. Change info in .env with env.example
4. `npm run dev` with dev or `npm start` with pm2 

## System architecture
![Microservice](https://minhtruong.s3.ap-southeast-1.amazonaws.com/de584886-3652-4e43-9151-4c72d588f404.png)

# Contact
Email: dlmtruong1609@gmail.com
