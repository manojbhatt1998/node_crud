const dbconnection = require('./mongodb');

// Use an async function to ensure you can await the connection
const main = async () => {
  try {
    const db = await dbconnection(); 
    const collection = await db.collection('products'); // Replace with your collection name

    var myquery = await { name: "Mickey3" };
    var newvalues = await { $set: {name: "abcd4", category: "dummy" } };

    const result = await collection.updateOne( myquery,newvalues);
     console.log(result);
    if (result.modifiedCount ===   1) {
      console.log('Document update successfully');
    } else {
      console.log('Document not found or update failed.');
    }
  } catch (error) {
    console.error('Error:', error);
  }
};

main();
