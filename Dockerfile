FROM node:18.20.3

COPY . /express_nodejs_prisma_postgresl
WORKDIR /express_nodejs_prisma_postgresl

RUN npm install
RUN npx prisma generate

EXPOSE 3000

CMD npm run start