const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define collection and schema for bussiness

let Persons = new Schema(
  {
    name: {
      type: "string",
    },
    company: {
      type: "string",
    },
    age: {
      type: "number",
    },
  },
  {
    collection: "persons",
  }
);

module.exports = mongoose.model("Persons", Persons);
