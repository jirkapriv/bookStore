const mongoose = require("mongoose");

const schema = mongoose.Schema({
  name: { type: String, required: true },
  author: { type: String, required: true },
  published: { type: Date, required: true },
  price: { type: Number, required: true },
  imgPath: { type: String, required: true },

});

module.exports = mongoose.model("Book2", schema);
