FROM node:18 as base

# Build base layer with all dependencies including --dev
WORKDIR /app
COPY . .
RUN npm install

# Development environment with mocked data and --watch mode
FROM base as dev
ARG ENVIRONMENT=test
WORKDIR /app
CMD ENVIRONMENT=${ENVIRONMENT} npm run start
EXPOSE 4200

# Run unit tests using karma
FROM trion/ng-cli-karma:13.3.1 as tests_unit
COPY --from=base /app /app
WORKDIR /app
CMD ["ng", "test"]

# Build production ready optimized dist
FROM node:18 as build
ARG ENVIRONMENT=production
COPY --from=base /app /app
WORKDIR /app
RUN ENVIRONMENT=${ENVIRONMENT} npm run build

# Serve production build
FROM nginx:alpine as web_production
COPY --from=build /app/dist/client /usr/share/nginx/html
EXPOSE 80
