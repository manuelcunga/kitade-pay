FROM node:16.17.0

WORKDIR /usr/src/app

COPY . /usr/src/app

ENV NODE_ENV=local

USER node

EXPOSE 3000

ENTRYPOINT [ "./start.sh" ]



