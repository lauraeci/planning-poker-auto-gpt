# Use the official Node.js LTS image as the base image
FROM node:lts

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install the dependencies
RUN npm ci

# Copy the source code to the working directory
COPY ../.. .

# Build the TypeScript project
RUN npm run build

# Expose the port the app will run on
EXPOSE 4000

# Start the server
CMD [ "npm", "serve" ]
