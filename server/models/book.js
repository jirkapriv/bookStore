const mongoose = require("mongoose");

const schema = mongoose.Schema({
  name: { type: String, required: true },
  author: { type: String, required: true },
  published: { type: Date, required: true },
  price: { type: Number, required: true },
});

module.exports = mongoose.model("Book", schema);
