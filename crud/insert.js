const dbconnection = require('./mongodb');

const insert = async () => {
  try {
    const db = await dbconnection();
    const collection = db.collection('products'); // Replace with your collection name

    const dataToInsert = [
      {
        name: 'abcd1',
        brand: 'abcd',
        category: 'mobile'
      },
      {
        name: 'abcd2',
        brand: 'abcd',
        category: 'mobile'
      },
      {
        name: 'abcd3',
        brand: 'abcd',
        category: 'mobile'
      }
    ];

    const result = await collection.insertMany(dataToInsert); // Use insertMany to insert multiple documents
    console.log(result);

    if (result.insertedCount > 0) {
      console.log(`Inserted ${result.insertedCount} documents into the collection`);
    } else {
      console.log('Insert failed.');
    }
  } catch (error) {
    console.error('Error inserting data:', error);
  }
};

insert();
