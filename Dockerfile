FROM mhart/alpine-node

WORKDIR /usr/src/app

COPY package* .

RUN npm install

COPY . .

EXPOSE 5000

CMD ["node","backend/server.js"]