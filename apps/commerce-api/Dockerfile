FROM node:18-slim

WORKDIR /app

# Copy the root package.json and package-lock.json for the monorepo
COPY package*.json ./
COPY turbo.json ./

# Copy the app-specific package.json
COPY apps/commerce-api/package*.json ./apps/commerce-api/

# Install dependencies for the monorepo
RUN npm install

# Copy the rest of the monorepo code
COPY . .

# Build Encore app
WORKDIR /app/apps/commerce-api
RUN npx encore run --build-only

# Expose the port Encore runs on
EXPOSE 8080

# Command to run the application
CMD ["npx", "encore", "run", "--prod"] 