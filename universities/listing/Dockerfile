# Use Node.js as the base image
FROM node:16-slim

# Set the working directory
WORKDIR /node-docker

# Copy package.json and package-lock.json first for better caching
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Expose port 5000
EXPOSE 5000

# Command to run the application
CMD ["node", "app.js"]
