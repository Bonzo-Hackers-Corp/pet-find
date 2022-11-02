# syntax=docker/dockerfile:1

# Base image
FROM node:18.12-alpine3.15

# Enviroment variables
ENV PATH /app/node_modules/.bin:$PATH

# Working directory
WORKDIR /app

# Install deps
COPY package*.json ./
RUN npm install --silent
RUN npm install react-scripts -g --silent

# Copy local files to container
COPY . .

# Build app
RUN npm run build-react

# Serve app with nginx
FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]