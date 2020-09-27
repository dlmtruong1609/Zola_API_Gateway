FROM node:10.22.0-alpine3.11

RUN ln -sf /usr/share/zoneinfo/Asia/Ho_Chi_Minh /etc/localtime \
    && apk update \
    && npm install -g nodemon \
    && npm i pm2 -g
COPY package.json package.json  
RUN npm install

WORKDIR /myapp
COPY . /myapp

EXPOSE 3000