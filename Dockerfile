# Dockerfile
FROM node:20-slim AS builder

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy source code
COPY . .

# Build the app
RUN npm run build

# Production stage
FROM nginx:alpine AS production

# Copy built assets from builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy nginx configuration
COPY config/nginx/nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 3000
EXPOSE 3000

CMD ["nginx", "-g", "daemon off;"]