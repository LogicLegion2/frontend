FROM node:20

WORKDIR /dist

COPY package*.json ./

RUN git clone https://github.com/LogicLegion2/frontend.git

COPY . .

ENV PORT=3800

CMD ["npm", "start"]