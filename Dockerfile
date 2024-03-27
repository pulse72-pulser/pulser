# stage1 as builder
FROM node:20-alpine as builder

# copy the package.json to install dependencies
COPY package.json package-lock.json ./

# Install the dependencies and make the folder
RUN npm install && mkdir /pulser-app && mv ./node_modules ./pulser-app

WORKDIR /pulser-app

COPY . .

# Build the project and copy the files
RUN npm run build


FROM nginx:alpine

#!/bin/sh

COPY ./.nginx/nginx.conf /etc/nginx/nginx.conf

## Remove default nginx index page
RUN rm -rf /usr/share/nginx/html/*

# Copy from the stahg 1
COPY --from=builder /pulser-app/out /usr/share/nginx/html

EXPOSE 3000 80

USER 10014


ENTRYPOINT ["nginx", "-g", "daemon off;"]