# Use official Node.js image as base
FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the entire React project to the container
COPY . .

# Expose port 3000 for React
EXPOSE 3000

# Command to run the React app
CMD ["npm", "start"]
