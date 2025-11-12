# # Build stage
# FROM node:18 AS build

# WORKDIR /app
# COPY package*.json ./
# RUN npm install
# COPY . .

# # Build Vite app
# RUN npm run build

# # Production stage - using Nginx to serve build files
# FROM nginx:alpine

# # Copy built files from previous stage
# COPY --from=build /app/dist /usr/share/nginx/html

# # Expose frontend port
# EXPOSE 3000

# # Start Nginx
# CMD ["nginx", "-g", "daemon off;"]


# client/Dockerfile
FROM node:18 AS build
WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.config /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
