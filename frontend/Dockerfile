FROM node:lts-alpine
WORKDIR /src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm ci
RUN npm install --save-dev vite
COPY . .
RUN npm run build
EXPOSE 5173
CMD ["npm", "run", "dev"]