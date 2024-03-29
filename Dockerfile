FROM node:18-alpine

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY package*.json ./

RUN npm --version

RUN npm install yarn

RUN yarn

COPY . .

COPY --chown=node:node . .

EXPOSE 3333

CMD [ "yarn", "start" ]