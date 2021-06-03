FROM node:14.17.0-alpine3.11 as reactBuild
RUN apk add --no-cache python2

WORKDIR /app
COPY . .
RUN yarn
RUN yarn build

FROM nginx:1.19.8-alpine

COPY ./nginx.conf /etc/nginx/nginx.conf
COPY --from=reactBuild /app/build /usr/share/nginx/html
