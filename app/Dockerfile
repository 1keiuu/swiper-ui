FROM node:14-alpine
RUN npm install -g webpack-cli webpack

WORKDIR /usr/src/app
COPY . .
RUN npm install

CMD ["npm","start"]