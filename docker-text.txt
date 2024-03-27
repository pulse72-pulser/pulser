# # FROM node:20-slim AS build-stage
# # WORKDIR /app
# # # Copy package. json and package-lock.json/yarn. Lock for optimal caching
# # COPY package*.json ./
# # RUN npm install
# # # Copy the rest of the app
# # COPY . .

# # # Build the app
# # RUN npm run build

# # # # - RUN STAGE
# # # FROM nginxinc/nginx-unprivileged:latest

# # # # Remove the default NGINX config file
# # # RUN rm /etc/nginx/conf.d/default.conf

# # # # Copy the nginx config
# # # COPY conf/nginx.conf /etc/nginx/conf.d/

# # # # Copy built app to nginx public directory
# # # COPY --from=build-stage /app/dist /usr/share/nginx/html

# # USER 10014 


# # # expose 
# # EXPOSE 8080

# # # CMD ["nginx", "-g", "daemon off;"]

# # CMD ["npm", "run", "start"]




# # Use a specific node version (adjust version as needed)
# FROM node:20-slim AS build-stage

# # Set working directory
# WORKDIR /app

# # Copy package.json and package-lock.json/yarn.lock for caching dependencies
# COPY package*.json ./

# # Install dependencies
# RUN npm install

# # Copy the rest of the application
# COPY . .

# # Install TypeScript and @types/node
# # RUN npm install --save typescript @types/node

# # Build the application (assuming you have a script for this in your package.json)
# RUN npm run build

# # - RUN STAGE
# FROM nginxinc/nginx-unprivileged:latest

# # Remove the default NGINX config file
# RUN rm /etc/nginx/conf.d/default.conf

# # Copy the nginx config
# COPY conf/nginx.conf /etc/nginx/conf.d/

# # Copy built app to nginx public directory
# COPY --from=build-stage /app/dist /usr/share/nginx/html



# # Set user (assuming it's required)
# USER 10014

# # Expose port
# EXPOSE 3000

# # # Command to start the application (modify as per your project setup)
# # # CMD ["node", "./dist/index.js"]
# # # ENTRYPOINT [ "npm", "run", "start" ,"-p" ,"8080"]
# # CMD ["npm", "run", "start"]
# CMD ["nginx", "-g", "daemon off;"]



# # Use a specific node version (adjust version as needed)
# FROM node:20-slim AS build-stage

# # Set working directory
# WORKDIR /app

# # Copy package.json and package-lock.json/yarn.lock for caching dependencies
# COPY package*.json ./

# # Install dependencies
# RUN npm install

# # Copy the rest of the application
# COPY . .

# # Install TypeScript and @types/node
# # RUN npm install --save typescript @types/node

# # Build the application (assuming you have a script for this in your package.json)
# RUN npm run build

# # Build NGINX stage
# FROM nginxinc/nginx-unprivileged:latest AS nginx-build

# # Remove the default NGINX config file
# RUN rm /etc/nginx/conf.d/default.conf

# # Copy the nginx config from build stage
# COPY conf/nginx.conf /etc/nginx/conf.d/

# # Copy built app to nginx public directory from build stage
# COPY --from=build-stage /app/dist /usr/share/nginx/html

# # Set user (assuming it's required)
# USER 10014

# # Expose port
# EXPOSE 3000

# # Command to start the NGINX server
# CMD ["nginx", "-g", "daemon off;"]


# Base on offical Node.js Alpine image
FROM node:latest as builder

# Set working directory
WORKDIR /usr/app

# Copy package.json and package-lock.json before other files
# Utilise Docker cache to save re-installing dependencies if unchanged
COPY package.json ./
COPY yarn.lock ./

# Install dependencies
RUN yarn install --frozen-lockfile

# Copy all files
COPY ./ ./

# Build app
RUN yarn build

# remove development dependencies
RUN yarn install --production

USER 10014

####################################################### 

FROM nginx:alpine

WORKDIR /usr/app

RUN apk add nodejs-current npm supervisor
RUN mkdir mkdir -p /var/log/supervisor && mkdir -p /etc/supervisor/conf.d

# Remove any existing config files
RUN rm /etc/nginx/conf.d/*

# Copy nginx config files
# *.conf files in conf.d/ dir get included in main config
COPY ./.nginx/default.conf /etc/nginx/conf.d/

# COPY package.json next.config.js .env* ./
# COPY --from=builder /usr/app/public ./public
COPY --from=builder /usr/app/.next ./.next
COPY --from=builder /usr/app/node_modules ./node_modules

# supervisor base configuration
ADD supervisor.conf /etc/supervisor.conf

# replace $PORT in nginx config (provided by executior) and start supervisord (run nextjs and nginx)
CMD sed -i -e 's/$PORT/'"$PORT"'/g' /etc/nginx/conf.d/default.conf && \
  supervisord -c /etc/supervisor.conf