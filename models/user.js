// const mongodb = require("mongodb");
// const getDb = require("../util/database").getDb;
//
// const ObjectId = mongodb.ObjectId;
//
// class User {
//   constructor(username, email, cart, id) {
//     this.name = username;
//     this.email = email;
//     this.cart = cart;
//     this._id = id;
//   }
//
//   save() {
//     const db = getDb();
//     return db.collection("users").insertOne(this);
//   }
//
//   static findById(userId) {
//     const db = getDb();
//     return db
//       .collection("users")
//       .findOne({ _id: new ObjectId(userId) })
//       .then((user) => {
//         console.log("user findById", user);
//         return user;
//       })
//       .catch((error) => {
//         console.log("error", error);
//       });
//   }
//
//   addToCart(product) {
//     const cartProductIndex = this.cart.items.findIndex((cp) => {
//       return cp.productId.toString() === product._id.toString();
//     });
//     let newQuantity = 1;
//     const updatedCartItems = [...this.cart.items];
//
//     if (cartProductIndex >= 0) {
//       // newQuantity = this.cart.items[cartProductIndex].quantity + 1;
//       this.cart.items[cartProductIndex].quantity += 1;
//     } else {
//       updatedCartItems.push({
//         productId: new ObjectId(product._id),
//         quantity: newQuantity,
//       });
//     }
//
//     const db = getDb();
//     // product.quantity = 1;
//     const updatedCart = {
//       items: updatedCartItems,
//     };
//     return db
//       .collection("users")
//       .updateOne(
//         { _id: new ObjectId(this._id) },
//         { $set: { cart: updatedCart } }
//       );
//   }
//
//   getCart() {
//     const db = getDb();
//     const productIds = this.cart.items.map((item) => item.productId);
//     return db
//       .collection("products")
//       .find({ _id: { $in: productIds } })
//       .toArray()
//       .then((products) => {
//         return products.map((p) => ({
//           ...p,
//           quantity: this.cart.items.find(
//             (i) => i.productId.toString() === p._id.toString()
//           ).quantity,
//         }));
//       });
//   }
//
//   deleteItemFromCart(productId) {
//     console.log("productId", productId);
//     const updatedCartItems = this.cart.items.filter(
//       (item) => item.productId.toString() !== productId.toString()
//     );
//     const db = getDb();
//     console.log("updatedCartItems", updatedCartItems);
//     return db.collection("users").updateOne(
//       {
//         _id: new ObjectId(this._id),
//       },
//       { $set: { cart: { items: updatedCartItems } } }
//     );
//   }
//
//   getOrders() {
//     const db = getDb();
//     return db
//         .collection('orders')
//         .find({ 'user._id': new ObjectId(this._id) })
//         .toArray();
//   }
//
//
// }
//
// module.exports = User;
// const mongodb = require("mongodb");
// const getDb = require("../util/database").getDb;
//
// const ObjectId = mongodb.ObjectId;
//
// class User {
//   constructor(username, email, cart, id) {
//     this.name = username;
//     this.email = email;
//     this.cart = cart;
//     this._id = id;
//   }
//
//   save() {
//     const db = getDb();
//     return db.collection("users").insertOne(this);
//   }
//
//   static findById(userId) {
//     const db = getDb();
//     return db
//       .collection("users")
//       .findOne({ _id: new ObjectId(userId) })
//       .then((user) => {
//         console.log("user findById", user);
//         return user;
//       })
//       .catch((error) => {
//         console.log("error", error);
//       });
//   }
//
//   addToCart(product) {
//     const cartProductIndex = this.cart.items.findIndex((cp) => {
//       return cp.productId.toString() === product._id.toString();
//     });
//     let newQuantity = 1;
//     const updatedCartItems = [...this.cart.items];
//
//     if (cartProductIndex >= 0) {
//       // newQuantity = this.cart.items[cartProductIndex].quantity + 1;
//       this.cart.items[cartProductIndex].quantity += 1;
//     } else {
//       updatedCartItems.push({
//         productId: new ObjectId(product._id),
//         quantity: newQuantity,
//       });
//     }
//
//     const db = getDb();
//     // product.quantity = 1;
//     const updatedCart = {
//       items: updatedCartItems,
//     };
//     return db
//       .collection("users")
//       .updateOne(
//         { _id: new ObjectId(this._id) },
//         { $set: { cart: updatedCart } }
//       );
//   }
//
//   getCart() {
//     const db = getDb();
//     const productIds = this.cart.items.map((item) => item.productId);
//     return db
//       .collection("products")
//       .find({ _id: { $in: productIds } })
//       .toArray()
//       .then((products) => {
//         return products.map((p) => ({
//           ...p,
//           quantity: this.cart.items.find(
//             (i) => i.productId.toString() === p._id.toString()
//           ).quantity,
//         }));
//       });
//   }
//
//   deleteItemFromCart(productId) {
//     console.log("productId", productId);
//     const updatedCartItems = this.cart.items.filter(
//       (item) => item.productId.toString() !== productId.toString()
//     );
//     const db = getDb();
//     console.log("updatedCartItems", updatedCartItems);
//     return db.collection("users").updateOne(
//       {
//         _id: new ObjectId(this._id),
//       },
//       { $set: { cart: { items: updatedCartItems } } }
//     );
//   }
//
//   getOrders() {
//     const db = getDb();
//     return db
//         .collection('orders')
//         .find({ 'user._id': new ObjectId(this._id) })
//         .toArray();
//   }
//
//
// }
//
// module.exports = User;
