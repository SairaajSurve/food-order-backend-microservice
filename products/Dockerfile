FROM node

WORKDIR /app/products

COPY package.json .

COPY .env .

RUN npm install

RUN mkdir src

ADD src /src

EXPOSE 8002

CMD ["npm", "start"]