FROM node:15-alpine
RUN npm install -g webpack-cli

WORKDIR /usr/src/app
COPY . .
RUN npm install

CMD ["npm","start"]