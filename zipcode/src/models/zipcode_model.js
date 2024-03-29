const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ZipcodeSchema = new Schema({
  zipcode: String,
  city: String,
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Zipcode", ZipcodeSchema);
