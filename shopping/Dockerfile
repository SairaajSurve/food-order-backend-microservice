FROM node

WORKDIR /app/shopping

COPY package.json .

COPY .env .

RUN npm install

RUN mkdir src

ADD src /src

EXPOSE 8003

CMD ["npm", "start"]