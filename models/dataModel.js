const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const DataSchema = new Schema(
  {
    fullname: {
      type: String,
      required: true,
    },
    contact: {
      type: Number,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Data", DataSchema);
