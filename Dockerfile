FROM node:20

WORKDIR /src

COPY package*.json ./

RUN npm install 

COPY . .

ENV PORT=3800

CMD ["npm", "run", "start"]