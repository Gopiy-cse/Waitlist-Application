# Waitlist-Application
An application that helps potential customers to sign up to a waiting list of a new iPhone product.It Provides a Signup page for the Customer.After the Customer Successfully Signedup his Waiting list position is Displayed and an email with Referal link is sent to the Customer.
If the Referal link is used by another user then Referal Customer's Position will be move by one position.The Admin can View, Edit and Delete the Waiting list.



## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Technologies](#technologies)
  - [Packages](#packages)
- [Login](#login)
- [Deployment](#deployment)
- [Usage](#usage)

## Getting Started

Follow these instructions to set up and run the Waitlist Application on your local machine.

### Prerequisites

You'll need the following software installed on your machine:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) (usually comes with Node.js)
### Technologies
- Reactjs
- Nodejs
- Expressjs
- MongoDB Atlas

### Packages
- Nodemailer
- React-Toastify
- React-Animate-on-scroll
- React-countup
- Blueimp-md5

## Login

- Admin 
`username:gopiykj14@gmail.com`
`password:gopiycse`  


## Deployment

#### 1. Clone the Reposotiry
```bash
git clone https://github.com/Gopiy-cse/waitlist-application.git
```
```
cd waitlist-application
```

#### 2. Go to the project directory and install dependencies for both the client and server
For Frontend:
```bash
  cd frontend
  npm install
```
For Backend:
```bash
 cd backend
  npm install
```

#### 3. Install the Dependencies of Server

Dependencies info :
 - Express : Allows you to Communicate and Transfer Data with the Server (Backend)
 - Mongoose : Mongoose is a MongoDB object modeling tool designed to work in an asynchronous environment. Mongoose supports Node.js.
 - Cors : CORS is a node.js package for enabling Cross Orgin Policy to send Data from two different Origins.
 - Nodemon : Nodemon is a tool that helps develop Node.js based applications by automatically restarting the node application when file changes in the directory are detected.

```bash
npm i express cors mongoose nodemon nodemailer md5 axios dotenv 
```

#### 4. Start the both, Server and Waitlist-Application
Frontend

The front-end of the Waitlist Application is built with React. To run the client, use the following commands:

  Change to the client directory:

  ```cd client```

  Start the development server:

  ```npm start```


  The client should be accessible in your web browser at http://localhost:3000.

Server (Backend)

The back-end of the Waitlist Application is built with Node.js and Express. To run the server, use the following commands:

  Change to the server directory:

  ```cd server```
  
  Start the server:

  ```npm start```

The server should be accessible at http://localhost:8001.

## Usage
Visit the client application at http://localhost:3000.
Sign up for the waitlist by providing your email.
Monitor your position on the waitlist.

<img src="/images/Screenshot (35).png" >
<img src="/images/Screenshot (36).png" >
<img src="/images/Screenshot (37).png" >
<img src="/images/Screenshot (38).png" >
<img src="/images/Screenshot (39).png" >
<<img src="/images/db1.png" >
<img src="/images/db2.png" >
