# Waitlist-Application
An application that helps potential customers to sign up to a waiting list of a new iPhone product.


## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Client (Front-end)](#client-front-end)
- [Server (Back-end)](#server-back-end)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

Follow these instructions to set up and run the Waitlist Application on your local machine.

### Prerequisites

You'll need the following software installed on your machine:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) (usually comes with Node.js)
## Technologies
- Reactjs
- Nodejs
- Expressjs
- MongoDB Atlas

## Login

- Admin 
`username:
- User can Create Account  


## Deployment

#### 1. Clone the Reposotiry
```bash
git clone https://github.com/Gopiy-cse/waitlist-application.git
```

#### 2. Go to the project directory and install dependencies for both the client and server
```bash
  cd client
  npm install
```
```bash
 cd server
  npm install
```

#### 3. Install the Dependencies of Server

Dependencies info :
 - Express : Create an API very easily for the server
 - Mongoose : Mongoose is a MongoDB object modeling tool designed to work in an asynchronous environment. Mongoose supports Node.js.
 - Cors : CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.
 - Nodemon : Nodemon is a tool that helps develop Node.js based applications by automatically restarting the node application when file changes in the directory are detected.
 - Bcrypt : A library to help you hash passwords.
 - SendinBlue : SendinBlue's API exposes the entire SendinBlue features via a standardized programmatic interface

```bash
npm i express cors mongoose nodemon bcrypt sib-api-v3-sdk
```
#### 4. Start the both, Server and Waitlist-Application
The front-end of the Waitlist Application is built with React. To run the client, use the following commands:

  Change to the client directory:


  cd client

  Start the development server:

  npm start


  The client should be accessible in your web browser at http://localhost:3000.

Server (Back-end)
The back-end of the Waitlist Application is built with Node.js and Express. To run the server, use the following commands:

  Change to the server directory:

  cd server
  Start the server:

  npm start

The server should be accessible at http://localhost:8001.

Usage
Visit the client application at http://localhost:3000.
Sign up for the waitlist by providing your email.
Monitor your position on the waitlist.
