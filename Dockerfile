# Simple Node image
FROM node:18-alpine

WORKDIR /app

# Copy package definition
COPY package.json ./

# Install only production dependencies
RUN npm install --omit=dev

# Copy server code
COPY webdav.js ./

# Create shared directory inside container
RUN mkdir -p /app/shared

# Expose WebDAV port
EXPOSE 8080

# Run the server
CMD ["npm", "start"]
