// mongodb.js
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://0.0.0.0:27017'; // Replace with your MongoDB connection string
const dbName = 'test'; // Replace with your database name

const dbconnection = async () => {
  try {
    const client = await MongoClient.connect(url);
    const db = client.db(dbName);
    return db;
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw error;
  }
};

module.exports = dbconnection;

// mongodb.js
// const MongoClient = require('mongodb').MongoClient;
// const url = 'mongodb://0.0.0.0:27017'; // Replace with your MongoDB connection string
// const dbName = 'test'; // Replace with your database name

// const dbconnection = async () => {
//   try {
//     const client = await MongoClient.connect(url);
//     const db =  client.db(dbName);
//      return db;
//   } catch (error) {
//     console.error('Error connecting to MongoDB:', error);
//     throw error;
//   }
// };






