FROM node:18-alpine
WORKDIR /index
COPY . .
RUN yarn install --production
CMD ["npm", "start"]
EXPOSE 3000