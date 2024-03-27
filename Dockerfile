# stage1 as builder
FROM node:20-alpine as builder

# Copy the package.json to install dependencies
COPY package.json ./

# Install the dependencies and make the folder
RUN npm install && mkdir /pulser-app && mv ./node_modules ./pulser-app

WORKDIR /pulser-app

# Copy the rest of the application code
COPY . .

# Build the project
RUN npm run build

# Use a multi-stage build for smaller image size
FROM nginx:alpine

# Remove default nginx index page
RUN rm -rf /usr/share/nginx/html/*

# Copy nginx configuration file
COPY .nginx/nginx.conf /etc/nginx/nginx.conf  # Make sure this file exists

# Copy built files from the builder stage
COPY --from=builder /pulser-app/out /usr/share/nginx/html

# Expose ports
EXPOSE 3000 80

# Set a non-root user if necessary
USER 10014

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
