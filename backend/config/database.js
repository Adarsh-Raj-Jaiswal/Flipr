// this file is used to establish a connection with the database
const mongoose = require("mongoose");

// creating a anonymous function and assigning it to connectDatabase variable
const connectDatabase = () => {
  mongoose
    .connect(process.env.DB_URI) // this methods connects with the database written in the url (here DB_URI) and returns a promise
    .then(
      // if connection is successfull
      (data) => {
        // when you use .then() with a promise, the value that the promise resolves with is passed as an argument to the function you specify within .then(). In this case, when the connection is successful, data will represent the connection object provided by Mongoose.
        console.log(`Mongodb connected with server:${data.connection.host}`);
      }
    );
};

module.exports = connectDatabase; // exporting the connectDatabase function used for creating a connection with the database (default export)
