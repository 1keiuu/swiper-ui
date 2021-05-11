FROM node:14-alpine
RUN npm install -g webpack-cli webpack webpack-dev-server eslint

WORKDIR /usr/src/app
COPY . .
RUN npm install

CMD ["npm","run", "dev"]