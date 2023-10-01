const dbconnection = require('./mongodb');

// Use an async function to ensure you can await the connection
const main = async () => {
  try {
    const db = await dbconnection();
    // const databaseName = obj.client.s.namespace.db;
    // console.log(databaseName); // This will print the database name    
    const collection = db.collection('products'); // Replace with your collection name
    // Fetch data from the collection
    const data = await collection.find().limit(2).toArray();
    console.log(data);
  } catch (error) {
    console.error('Error:', error);
  }
};
main();

// const main = async () =>{
//   const db = await dbconnection()
//   const collection =  await db.collection('products');
// const data = await collection.find().toArray();
// console.log(data);
// }
// main()