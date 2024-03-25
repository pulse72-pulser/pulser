# FROM node:20-slim AS build-stage
# WORKDIR /app
# # Copy package. json and package-lock.json/yarn. Lock for optimal caching
# COPY package*.json ./
# RUN npm install
# # Copy the rest of the app
# COPY . .

# # Build the app
# RUN npm run build

# # # - RUN STAGE
# # FROM nginxinc/nginx-unprivileged:latest

# # # Remove the default NGINX config file
# # RUN rm /etc/nginx/conf.d/default.conf

# # # Copy the nginx config
# # COPY conf/nginx.conf /etc/nginx/conf.d/

# # # Copy built app to nginx public directory
# # COPY --from=build-stage /app/dist /usr/share/nginx/html

# USER 10014 


# # expose 
# EXPOSE 8080

# # CMD ["nginx", "-g", "daemon off;"]

# CMD ["npm", "run", "start"]




# Use a specific node version (adjust version as needed)
FROM node:20-slim AS build-stage

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json/yarn.lock for caching dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Install TypeScript and @types/node
RUN npm install --save typescript @types/node

# Build the application (assuming you have a script for this in your package.json)
RUN npm run build

# Set user (assuming it's required)
USER 10014

# Expose port
EXPOSE 8080

# Command to start the application (modify as per your project setup)
CMD ["node", "./dist/index.js"]
