const mongoose = require('mongoose')

const Schema = mongoose.Schema;


const productSchema = new Schema({
  title: {
    type:String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required : true
  },
  imageUrl: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Product', productSchema)


// const getDb = require("../util/database").getDb;
// const MongoDB = require("mongodb");
//
// class Product {
//   constructor(title, price, description, imageUrl, id, userId) {
//     this.title = title;
//     this.description = description;
//     this.price = price;
//     this.imageUrl = imageUrl;
//     this._id = id ? new MongoDB.ObjectId(id) : null;
//     this.userId = userId;
//   }
//
//   save() {
//     const db = getDb();
//     let dbOp;
//     if (this._id) {
//       dbOp = db
//         .collection("products")
//         .updateOne({ _id: this._id }, { $set: this });
//     } else {
//       dbOp = db.collection("products").insertOne(this);
//     }
//     return dbOp
//       .then((result) => {
//         console.log(result);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }
//
//   static fetchAll() {
//     return getDb()
//       .collection("products")
//       .find()
//       .toArray()
//       .then((products) => {
//         return products;
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }
//
//   static findById(prodId) {
//     return getDb()
//       .collection("products")
//       .find({ _id: new MongoDB.ObjectId(prodId) })
//       .next()
//       .then((product) => {
//         console.log("findById function", product);
//         return product;
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }
//
//   static update(product) {
//     return getDb().collection("products").updateOne();
//   }
//   static deleteById(productId) {
//     return getDb()
//       .collection("products")
//       .deleteOne({ _id: new MongoDB.ObjectId(productId) })
//       .then((result) => {
//         console.log("deleted");
//       })
//       .catch((err) => {
//         console.log("err", err);
//       });
//   }
// }
//
// module.exports = Product;
