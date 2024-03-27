# stage1 as builder
FROM node:20-alpine as builder

COPY package.json ./
RUN npm install && mkdir /pulser-app && mv ./node_modules ./pulser-app
WORKDIR /pulser-app
COPY . .
RUN npm run build

FROM nginx:alpine
RUN rm -rf /usr/share/nginx/html/*
COPY .nginx/nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /pulser-app/out /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
