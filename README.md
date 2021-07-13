# GNEWS App

_GNEWS App_ is a web application that uses "GNEWS" API to search, list and preview articles, while logging user actions in the backend.
Live application example: http://18.197.112.132/

## Table of contents

- [Setup](#setup)
- [Features](#features)
- [Technologies](#technologies)

## Setup

#### 1. Necessary resources

1. Install [node.js](https://nodejs.org/en/) to be able to use npm commands.
2. Front end from [this repository](https://github.com/Minde339/gnews-app-fe).
3. MongoDB Atlas [MongoDB Atlas Getting Started](https://docs.atlas.mongodb.com/getting-started/) to log user actions in the backend.
4. After setting MongoDB atlas in gnews-app-be/ ADD .env file with
   DATABASE=mongodb+srv://<USER>:<PASSWORD>@cluster0.rnbkp.mongodb.net/<YOUR_DATABASE_NAME>?retryWrites=true&w=majority
   DATABASE_PASSWORD=<YOUR_PASSWORD>

#### 2. Starting application

```
# Clone this repository
$ git clone https://github.com/Minde339/gnews-app-be

# Go into the repository folder
$ cd gnews-app-be

# Install dependencies
$ npm install

# Run the app
$ npm start
```

## Features

- The application backend waits request data from [Front End](https://github.com/Minde339/gnews-app-fe).
- Data is sent to MongoDB to log user Actions.
- Searched Articles and Clicked Urls is seperated.

## Technologies

- Node.js
- Express.js
- MongoDB
- Mongoose
