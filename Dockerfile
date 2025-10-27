FROM node:24-bookworm

RUN mkdir -p /app
WORKDIR /app

COPY . /app/
RUN npm install

EXPOSE 8083

# start the app
CMD [ "npx", "@11ty/eleventy", "--serve", "--port=8083" ]
