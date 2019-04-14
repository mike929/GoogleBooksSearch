const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const googlebooks = new Schema({
  title: { type: String, required: true },
  authors: { type: String, required: true },
  description: String,
  image: String,
  link: String
});

const Book = mongoose.model("Book", googlebooks);

module.exports = Book;
