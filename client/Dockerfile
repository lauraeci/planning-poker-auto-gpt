# Use the official Node.js LTS image as the base image
FROM node:lts as build-stage

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install the dependencies
RUN npm ci

# Copy the source code to the working directory
COPY . .

# Build the React app
RUN npm run build

# Use the official nginx image as the base image for the production environment
FROM nginx:stable-alpine

# Copy the built React app to the nginx html folder
COPY --from=build-stage /app/build /usr/share/nginx/html

# Expose the port the app will run on
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
