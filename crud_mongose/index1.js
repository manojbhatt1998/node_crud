const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/test');
    const productschema = new mongoose.Schema({
        name: String,
        price: Number,
        brand: String,
        category: String
    });
//insert data
// const saveindb = async () => {
//     const productschema = new mongoose.Schema({
//         name: String,
//         price: Number,
//         brand: String,
//         category: String
//     });
//     const Productmodal = mongoose.model('products', productschema);
//     let data = new Productmodal({
//         name: 'manojbhatt',
//         price: 1000,
//         brand: "manojbhatt",
//         category: "manojbhatt"
//     });
//      let result = await data.save();
//     console.log(result);
// }
// saveindb();

//update data
// const updateInDb = async () => {
//     const productschema = new mongoose.Schema({
//         name: String,
//         price: Number,
//         brand: String,
//         category: String
//     });
//     const Product = mongoose.model('products', productschema);
//     try {
//         const data = await Product.updateOne(
//             { name: "abcd2" },
//             { $set: { brand: "mii" } }
//         );
//         console.log(data);
//     } catch (error) {
//         console.error(error);
//     }
// }

// updateInDb()

//Delete
// const deleteDb = async () =>{
//     const Product = await mongoose.model('products', productschema);
//     let data = await Product.deleteOne({ name: "abcd2" });
//     console.log(data);
// }
// deleteDb();


//Read
const ReadDb = async () =>{
    const Product = await mongoose.model('products', productschema);
    let data = await Product.find();
    console.log(data);
}
ReadDb();