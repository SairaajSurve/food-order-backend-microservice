FROM node

WORKDIR /app/customer

COPY package.json .

COPY .env .

RUN npm install

RUN mkdir src

ADD src /src

EXPOSE 8001

CMD ["npm", "start"]