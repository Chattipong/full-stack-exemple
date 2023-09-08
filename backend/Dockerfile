FROM node:alpine

WORKDIR /app

COPY package*.json ./
RUN npm install 

COPY . .

RUN chmod -R 777 /app

EXPOSE 3088

CMD [ "npm" ,"run", "dev" ]