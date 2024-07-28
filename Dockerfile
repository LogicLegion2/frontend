FROM node:20

WORKDIR /dist

COPY package*.json ./

RUN npm install 

COPY . .

ENV PORT=3800

CMD ["npm", "start"]