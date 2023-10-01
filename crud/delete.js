const dbconnection = require('./mongodb');

// Use an async function to ensure you can await the connection
const main = async () => {
  try {
    const db = await dbconnection(); 
    const collection = await db.collection('products'); // Replace with your collection name

    // Delete a document that matches the filter
    const result = await collection.deleteOne({ name: 'abcd1' });

    if (result.deletedCount === 1) {
      console.log('Document deleted successfully');
    } else {
      console.log('Document not found or deletion failed.');
    }
  } catch (error) {
    console.error('Error:', error);
  }
};

main();
